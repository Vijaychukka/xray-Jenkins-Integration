package com.demo.scripts.stepDefs;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class MyStepdefs {
    @Given("^demo application is opened$")
    public void demoApplicationIsOpened()
    {
        System.out.println("demo application is opened");
    }

    @When("^print application$")
    public void printApplication()
    {
        System.out.println("demo application is opened");
    }


    @Given("^demo application is openedsecondtime$")
    public void demoApplicationIsOpenedsecondtime()
    {
        System.out.println("demo application is opened");
    }

    @When("^print applicationsecondtime$")
    public void printApplicationsecondtime()
    {
        System.out.println("demo application is opened");
    }
}
