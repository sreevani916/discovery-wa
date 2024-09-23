async function preReceiveHandler(event) {
  // console.log("event data",event)
  let lang = "";

  if (event.data.output.entities != null) {
    for (const element of event.data.output.entities) {
      lang = element.value;

      
         console.log("model is ",lang)

         if(lang.toLocaleLowerCase() == "no"){
          console.log("NO IS Selected")
          myFunction();
         }
      
    }

    
   
  }
   
}

function myFunction() {
  var x = document.getElementById("vpn");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

window.watsonAssistantChatOptions = {
    integrationID: "08808ab5-85e0-4892-88c5-8c9441b13884", // The ID of this integration.
    //integrationID : "7b51398c-ee44-42be-82a1-fb69ada84cd9",
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "03e8a7c8-38fb-45df-974b-9ede3fc18a51", // The ID of your service instance.
  onLoad: function (instance) {
    instance.on({ type: "receive", handler: preReceiveHandler });

    document
     
      .addEventListener("click", function () {
        
      });

    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
  sessionStorage.clear();
});