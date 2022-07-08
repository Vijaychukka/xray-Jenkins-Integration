package com.demo.scripts.testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber.html",
        "json:target/cucumber-report.json", "junit:target/cucumber.xml"},
        glue={"com/demo/scripts/stepDefs"},
        features="src/test/resources/features/",
        tags="@Happypath",
        monochrome=true)
public class DemoTestRunner
{

}
