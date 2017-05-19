(function(window, undefined) {
  var dictionary = {
    "73f0de8e-398f-4825-b24f-9a2278801a58": "modify News",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "fb885091-e176-4200-98ef-b589a93958a4": "7",
    "220e432b-2db2-4f54-b134-e9eb5d352e52": "new News",
    "949e641d-6108-41f5-bf2b-03209e0a4df0": "view News",
    "d8f27058-89e5-4c2f-9054-c93889233e9f": "new News_2",
    "22610c38-e70b-46c0-9e57-2efcc5325906": "viewlist News",
    "f817fd9d-cf7a-43e6-9555-6079f450f611": "6",
    "f0153231-262a-4f9a-a915-942a57bc4785": "5",
    "20dc688e-b5c1-4643-8c3e-e09e207974a6": "new News_1",
    "5b020b9e-2b36-4785-baf6-89e29acafd2b": "delete News",
    "0fc1d882-26a6-4af1-96bc-744c14132ded": "modify News_1",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "9d302a0f-8f97-4118-afb3-efdbdeca4478": "1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);