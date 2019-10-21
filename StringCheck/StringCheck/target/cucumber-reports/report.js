$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/SentenceCheck.feature");
formatter.feature({
  "name": "Matching the sentences",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Matching the sentences and extracting the different words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"\u003cFirst\u003e\" String as First Sentence",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter \"\u003cSecond\u003e\" String as Second Sentence",
  "keyword": "Given "
});
formatter.step({
  "name": "Extracting the different words",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First",
        "Second"
      ]
    },
    {
      "cells": [
        "I am an automation Script",
        "Automation is best practice"
      ]
    },
    {
      "cells": [
        "This is \u0026 String 1 test",
        "This is String 2 *"
      ]
    },
    {
      "cells": [
        "This is String1 %5",
        "This is String2"
      ]
    },
    {
      "cells": [
        "Java@11 is good!",
        "Java@8 is still in market"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Matching the sentences and extracting the different words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"I am an automation Script\" String as First Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_First_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"Automation is best practice\" String as Second Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_Second_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Extracting the different words",
  "keyword": "Then "
});
formatter.match({
  "location": "SentenceCheck.extracting_the_different_words()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Matching the sentences and extracting the different words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"This is \u0026 String 1 test\" String as First Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_First_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"This is String 2 *\" String as Second Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_Second_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Extracting the different words",
  "keyword": "Then "
});
formatter.match({
  "location": "SentenceCheck.extracting_the_different_words()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Matching the sentences and extracting the different words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"This is String1 %5\" String as First Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_First_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"This is String2\" String as Second Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_Second_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Extracting the different words",
  "keyword": "Then "
});
formatter.match({
  "location": "SentenceCheck.extracting_the_different_words()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Matching the sentences and extracting the different words",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter \"Java@11 is good!\" String as First Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_First_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"Java@8 is still in market\" String as Second Sentence",
  "keyword": "Given "
});
formatter.match({
  "location": "SentenceCheck.enter_String_as_Second_Sentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Extracting the different words",
  "keyword": "Then "
});
formatter.match({
  "location": "SentenceCheck.extracting_the_different_words()"
});
formatter.result({
  "status": "passed"
});
});