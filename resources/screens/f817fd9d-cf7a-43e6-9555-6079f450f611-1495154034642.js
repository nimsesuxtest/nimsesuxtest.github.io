jQuery("#simulation")
  .on("click", ".s-f817fd9d-cf7a-43e6-9555-6079f450f611 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f0153231-262a-4f9a-a915-942a57bc4785"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Button_2": {
                      "attributes": {
                        "background-color": "#EBEBEB",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(66 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px",
                        "-pie-background": "#EBEBEB",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(66 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_10"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-f817fd9d-cf7a-43e6-9555-6079f450f611 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": {
                      "datatype": "variable",
                      "element": "FolderName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_7",
                    "value": {
                      "datatype": "variable",
                      "element": "News"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_12",
                    "value": {
                      "datatype": "variable",
                      "element": "FolderName"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-f817fd9d-cf7a-43e6-9555-6079f450f611 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-f817fd9d-cf7a-43e6-9555-6079f450f611 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f817fd9d-cf7a-43e6-9555-6079f450f611 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_14": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_14": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_17": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_17": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_19": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_19": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_20") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_20": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f817fd9d-cf7a-43e6-9555-6079f450f611 #s-Label_20": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f817fd9d-cf7a-43e6-9555-6079f450f611 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_20")) {
      jEvent.undoCases(jFirer);
    }
  });