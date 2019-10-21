package StepD;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pageObject.SentenceCheckPageObject;

public class SentenceCheck {
	
	String firstString = "";
	String secondString = "";
	
	@Given("Enter {string} String as First Sentence")
	public void enter_String_as_First_Sentence(String string) {
	    firstString = string;
	    firstString = firstString.toLowerCase().replaceAll("[^a-z\\sA-Z]","");
	}

	@Given("Enter {string} String as Second Sentence")
	public void enter_String_as_Second_Sentence(String string) {
	    secondString = string;
	    secondString = secondString.toLowerCase().replaceAll("[^a-z\\sA-Z]","");
	}

	@Then("Extracting the different words")
	public void extracting_the_different_words() {
	    SentenceCheckPageObject.getDifferences(firstString, secondString);
	}

}
