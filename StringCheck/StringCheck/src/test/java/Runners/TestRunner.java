package Runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		
		features = "src/test/resources/Features", 
		glue = { "StepD" },  
		plugin = { "pretty", "html:target/cucumber-reports", "junit:target/cucumber-reports/Cucumber.xml",
		"json:target/cucumber-reports/Cucumber.json"}, 
		monochrome = true
)

public class TestRunner extends AbstractTestNGCucumberTests{
	
}
