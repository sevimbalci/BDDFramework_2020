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
        "seyma@sample.com",
        "test123"
      ],
      "line": 17,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "sumeyra@sample.com",
        "abc@123"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "aysegul@sample.com",
        "456@werr"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3644549153,
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
  "duration": 209170219,
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
  "name": "I enter seyma@sample.com into username text fields on home screen",
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
      "val": "seyma@sample.com",
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
  "duration": 154792913,
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
  "duration": 77666759,
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
  "duration": 118059210,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 4569179820,
  "status": "passed"
});
formatter.after({
  "duration": 121040435,
  "status": "passed"
});
formatter.before({
  "duration": 2136246429,
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
  "duration": 4681055,
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
  "name": "I enter sumeyra@sample.com into username text fields on home screen",
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
      "val": "sumeyra@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 32
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 167074352,
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
  "duration": 74883885,
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
  "duration": 102972629,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 8739301020,
  "status": "passed"
});
formatter.after({
  "duration": 124644415,
  "status": "passed"
});
formatter.before({
  "duration": 2229877823,
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
  "duration": 14167200,
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
  "name": "I enter aysegul@sample.com into username text fields on home screen",
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
      "val": "aysegul@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 32
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 137957625,
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
  "duration": 81759370,
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
  "duration": 9721490761,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 22282379,
  "status": "passed"
});
formatter.after({
  "duration": 130236266,
  "status": "passed"
});
formatter.uri("Messenger.feature");
formatter.feature({
  "line": 4,
  "name": "Messenger page feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 2137344458,
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
  "name": "I am on messenger page",
  "keyword": "Given "
});
formatter.match({
  "location": "MessengerSD.setMessengerPage()"
});
formatter.result({
  "duration": 1319686461,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@messenger"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter ilhanturkmen@siliconelabs.com into username field on the messenger page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter test123 into password field on the messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button on messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ilhanturkmen@siliconelabs.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 43
    }
  ],
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 174879432,
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
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 54650875,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.clickOnLoginButton()"
});
formatter.result({
  "duration": 2001183871,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.verifySignInErrorMessage()"
});
formatter.result({
  "duration": 23410355,
  "status": "passed"
});
formatter.after({
  "duration": 134294105,
  "status": "passed"
});
});