import csv
import re
import pickle 

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

inpData = csv.reader(open('sample.csv', 'rb'), delimiter=',', quotechar='|')

stopWords = getStopWordList('stopwords.txt')

featureList = []
Sentiments = []

for row in inpData:
    sentiment = row[0]
    sentence = row[1]
    featureVector = getFeatureVector(sentence , stopWords)
    featureList.extend(featureVector)
    Sentiments.append((featureVector, sentiment))

featureList = list(set(featureList))

pick1 = open('featureListFile.pkl' , 'wb')
pickle.dump(featureList, pick1)
pick1.close()

pick2 = open('SentimentsFile.pkl' , 'wb')
pickle.dump(Sentiments , pick2)
pick2.close()



