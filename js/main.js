
function validate() {
    var input = $('.validate-input .input100');
    var check = true;
    for (var i = 0; i < input.length; i++) {
        if (notEmpty(input) == false) {
            showValidate(input[i]);
            check = false;
        }
    }


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    return check;
}


function notEmpty(input) {
    if ($(input).val().trim() == '') {
        return false;
    }
    return true;
}

function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass('alert-validate');
}



function login() {
    if (validate()) {
        let input = $('.validate-input .input100');
        let username;
        let password;
        for (var i = 0; i < input.length; i++) {
            if (input[i].name == 'username') {
                username = input[i].value
            } else {
                password = input[i].value
            }

        }

        if (username === 'test' && password === 'test') {
            // var submit = document.getElementById("WACLauncher__Button")

            // if (checkCredentials(username, password)) {
            //     submit.click();
            // }
            window.location = "./index.html"
        } else {
            window.location = "./portal.html"
        }
    }
}

function checkCredentials(user, pass) {
    // check validation crdentials
    return true
}

async function preReceiveHandler(event) {
    console.log("event data", event)

}

// window.watsonAssistantChatOptions = {
//     integrationID: "0b4a4aab-3e49-4a1b-ae3f-fcd7d7f0a73e", // The ID of this integration.
//     //integrationID : "7b51398c-ee44-42be-82a1-fb69ada84cd9",
//     region: "us-south", // The region your integration is hosted in.
//     serviceInstanceID: "03e8a7c8-38fb-45df-974b-9ede3fc18a51", // The ID of your service instance.
//     onLoad: function (instance) {
//         instance.on({ type: "receive", handler: preReceiveHandler });

//         document

//             .addEventListener("click", function () {

//             });

//         instance.render();
//     },
// };
// setTimeout(function () {
//     const t = document.createElement("script");
//     t.src =
//         "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
//         (window.watsonAssistantChatOptions.clientVersion || "latest") +
//         "/WatsonAssistantChatEntry.js";
//     document.head.appendChild(t);
//     sessionStorage.clear();
// });