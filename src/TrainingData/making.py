import csv
import re
import pickle 

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


def getStopWordList(stopWordListFileName):
    #read the stopwords file and build a list
    stopWords = []

    fp = open(stopWordListFileName, 'r')
    line = fp.readline()
    while line:
        word = line.strip()
        stopWords.append(word)
        line = fp.readline()
    fp.close()
    return stopWords

def getFeatureVector(line , stopWords):
    featureVector = []
    #split Sentence into words
    words = line.split()
    for w in words:
        #strip punctuation
        w = replaceTwoOrMore(w)
        w = w.strip('\'"?,.')
        w = w.strip()
        w = w.strip('!')
        #check if the word stats with an alphabet
        val = re.search(r"^[a-zA-Z][a-zA-Z0-9]*$", w)
        #ignore if it is a stop word
        if(w in stopWords or val is None):
            continue
        else:
            featureVector.append(w.lower())
    return featureVector

def extract_features(tweet):
    tweet_words = set(tweet)
    features = {}
    for word in featureList:
        features['contains(%s)' % word] = (word in tweet_words)
    return features

inpData = csv.reader(open('sample.csv', 'rb'), delimiter=',', quotechar='"')

stopWords = getStopWordList('stopwords.txt')

featureList = []
Sentiments = []

for row in inpData:
    sentiment = row[0]
    sentence = row[1]
    featureVector = getFeatureVector(processTweet(sentence) , stopWords)
    featureList.extend(featureVector)
    Sentiments.append((featureVector, sentiment))

featureList = list(set(featureList))

pick1 = open('featureListFile.pkl' , 'wb')
pickle.dump(featureList, pick1)
pick1.close()

pick2 = open('SentimentsFile.pkl' , 'wb')
pickle.dump(Sentiments , pick2)
pick2.close()



