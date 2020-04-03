$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "ilhan@sample.com",
        "test123"
      ],
      "line": 17,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "hasan@sample.com",
        "abc@123"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "ismet@sample.com",
        "456@werr"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3635340145,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 210799886,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ilhan@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ilhan@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 147540653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 80996036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickonButton(String)"
});
formatter.result({
  "duration": 27513604038,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 21949831,
  "status": "passed"
});
formatter.after({
  "duration": 101361099,
  "status": "passed"
});
formatter.before({
  "duration": 2187734839,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 4536674,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter hasan@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter abc@123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hasan@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 169619212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 68940146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickonButton(String)"
});
formatter.result({
  "duration": 6382431219,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 23249958,
  "status": "passed"
});
formatter.after({
  "duration": 85229241,
  "status": "passed"
});
formatter.before({
  "duration": 2168298114,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 4549716,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ismet@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter 456@werr into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ismet@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 237914231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456@werr",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 76396617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickonButton(String)"
});
formatter.result({
  "duration": 3886674614,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 20436240,
  "status": "passed"
});
formatter.after({
  "duration": 88248137,
  "status": "passed"
});
});