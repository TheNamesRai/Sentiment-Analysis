import csv
import re
import pickle 
import nltk
import time

def processTweet(tweet):
    # process the tweets

    #Convert to lower case
    tweet = tweet.lower()
    #Convert www.* or https?://* to URL
    tweet = re.sub('((www\.[^\s]+)|(https?://[^\s]+))','URL',tweet)
    #Convert @username to AT_USER
    tweet = re.sub('@[^\s]+','AT_USER',tweet)
    #Remove additional white spaces
    tweet = re.sub('[\s]+', ' ', tweet)
    #Replace #word with word
    tweet = re.sub(r'#([^\s]+)', r'\1', tweet)
    #trim
    tweet = tweet.strip('\'"')
    return tweet

def replaceTwoOrMore(s):
    #look for 2 or more repetitions of character and replace with the character itself
    pattern = re.compile(r"(.)\1{1,}", re.DOTALL)
    return pattern.sub(r"\1\1", s)

def getWasteWordList(wasteWordListFileName):
    #read the wastewords file and build a list
    wasteWords = []

    fp = open(wasteWordListFileName, 'r')
    line = fp.readline()
    while line:
        word = line.strip()
        wasteWords.append(word)
        line = fp.readline()
    fp.close()
    return wasteWords

def getFeatureVector(line , wasteWords):
    featureVector = []
    tokenized = nltk.word_tokenize(line)
    tagged = nltk.pos_tag(tokenized)

    # For adverb and verb pair and indivisual
    grammar = r"""NP: {<RB.?>?<VB.?>?}"""
    cp = nltk.RegexpParser(grammar)
    result = cp.parse(tagged)
    words = re.findall(r'NP (.*?)\)' , str(result))
    for word in words:
        if " " in word:
            new_word = ""
            i = 0
            while i < len(word):
                if word[i] == '/':
                    while i < len(word) and word[i] != ' ':
                        i += 1
                else:
                    new_word += word[i]
                    i += 1
            new_word = new_word.lower()
            if new_word not in wasteWords:
                new_word = replaceTwoOrMore(new_word)
                new_word = new_word.strip('.')
                new_word = new_word.strip('!')
                new_word = new_word.strip(' ')
                new_word = new_word.strip('\'"?,.')
                featureVector.append(new_word)
        else:
            new_word = ""
            i = 0
            while i < len(word):
                if word[i] == '/':
                    break
                else:
                    new_word += word[i]
                    i += 1
            if new_word not in wasteWords:
                new_word = replaceTwoOrMore(new_word)
                new_word = new_word.strip('.')
                new_word = new_word.strip('!')
                new_word = new_word.strip(' ')
                new_word = new_word.strip('\'"?,.')
                featureVector.append(new_word)

    # for adverb and adjective pair
    grammar = r"""NP: {<RB.?>?<JJ.?>?}"""
    cp = nltk.RegexpParser(grammar)
    result = cp.parse(tagged)
    words = re.findall(r'NP (.*?)\)' , str(result))
    for word in words:
        if " " in word:
            new_word = ""
            i = 0
            while i < len(word):
                if word[i] == '/':
                    while i < len(word) and word[i] != ' ':
                        i += 1
                else:
                    new_word += word[i]
                    i += 1
            new_word = new_word.lower()
            if new_word not in wasteWords:
                new_word = replaceTwoOrMore(new_word)
                new_word = new_word.strip('.')
                new_word = new_word.strip('!')
                new_word = new_word.strip(' ')
                new_word = new_word.strip('\'"?,.')
                featureVector.append(new_word)
        else:
            new_word = ""
            i = 0
            while i < len(word):
                if word[i] == '/':
                    break
                else:
                    new_word += word[i]
                    i += 1
            if new_word not in wasteWords:
                new_word = replaceTwoOrMore(new_word)
                new_word = new_word.strip('.')
                new_word = new_word.strip('!')
                new_word = new_word.strip(' ')
                new_word = new_word.strip('\'"?,.')
                featureVector.append(new_word)

    # Checking for noun
    for word in tagged:
        if word[1][0:2] == 'NN':
            new_word = word[0].lower()
            if new_word not in wasteWords:
                featureVector.append(new_word)

    return list(set(featureVector))

def extract_features(featureset):
    featureset_words = set(featureset)
    features = {}
    for word in featureList:
        features['contains(%s)' % word] = (word in featureset_words)
    return features

inpData = csv.reader(open('sample.csv', 'rb'), delimiter=',', quotechar='"')

wasteWords = getWasteWordList('wastewords.txt')

featureList = []
Sentiments = []

for row in inpData:
    sentiment = row[0]
    sentence = row[1]
    featureVector = getFeatureVector(processTweet(sentence) , wasteWords)
    if len(featureVector) == 0:
        continue
    featureList.extend(featureVector)
    Sentiments.append((featureVector, sentiment))

featureList = list(set(featureList))
pick1 = open('featureListFile.pkl' , 'wb')
pickle.dump(featureList, pick1)
pick1.close()

pick2 = open('SentimentsFile.pkl' , 'wb')
pickle.dump(Sentiments , pick2)
pick2.close()


# print "Trainer starts"
# time_b = time.time()
# training_set = nltk.classify.util.apply_features(extract_features, Sentiments)
# NBClassifier = nltk.NaiveBayesClassifier.train(training_set)
# time_a = time.time()
# print time_a - time_b
# testTweet = "It have nice Camera"


# time_b = time.time()
# print NBClassifier.classify(extract_features(getFeatureVector(testTweet , wasteWords))) 
# time_a = time.time()
# print time_a - time_b