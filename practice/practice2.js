var user = "admin";

switch (user) {
    case "admin":
        console.log("you get the full acess");
        break;

        case "Subadmin":
            console.log("get acess to create/delete courses");
            break;
        
            case "testprep":
                console.log("get acess to create/delete courses");
                break;

                case "user":
                    console.log("gets acess to consume the content");
        break;

    default:
        console.log("trial user");
        break;
}

var user = "2";

//use == to say equals,use === to check its equal and check its type 
//matches the value too.
if (2 === user) {
    console.log("condition is true")
}