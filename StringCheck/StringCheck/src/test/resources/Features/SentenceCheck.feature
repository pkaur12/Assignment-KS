Feature: Matching the sentences


Scenario Outline: Matching the sentences and extracting the different words

Given Enter "<First>" String as First Sentence
Given Enter "<Second>" String as Second Sentence
Then Extracting the different words


	Examples:
     |			First								|			Second				 			|
     |	  I am an automation Script					|	   Automation is best practice			|
     |	  This is & String 1 test					|	   This is String 2 *					|
     |	  This is String1 %5						|	   This is String2						|
     |	  Java@11 is good!							|	   Java@8 is still in market			|
   