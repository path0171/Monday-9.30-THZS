<?php

require_once "sanitize.php";

header("Content-Type: application/json");

$action = "";
if (isset($_GET["action"])) {
    $action = $_GET["action"];
}
if (isset($_POST["action"])) {
    $action = $_POST["action"];
}

if ($action === "get_pets") {
    $json = file_get_contents("../data/pets.json");
    echo $json;
    exit;
}

if ($action === "save_contact") {
    $name = sanitizeText($_POST["name"]);
    $email = sanitizeEmail($_POST["email"]);
    $phone = sanitizeText($_POST["phone"]);
    $subject = sanitizeText($_POST["subject"]);
    $message = sanitizeText($_POST["message"]);

    $file = "../data/contact_messages.json";
    $data = json_decode(file_get_contents($file), true);

    $newMessage = array();
    $newMessage["name"] = $name;
    $newMessage["email"] = $email;
    $newMessage["phone"] = $phone;
    $newMessage["subject"] = $subject;
    $newMessage["message"] = $message;

    $data["messages"][] = $newMessage;

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    echo json_encode(array("success" => true, "message" => "Message saved."));
    exit;
}

if ($action === "save_adoption") {
    $name = sanitizeText($_POST["fullname"]);
    $email = sanitizeEmail($_POST["email"]);
    $phone = sanitizeText($_POST["phone"]);
    $pet = sanitizeText($_POST["pet"]);
    $experience = sanitizeText($_POST["experience"]);

    $file = "../data/adoption_applications.json";
    $data = json_decode(file_get_contents($file), true);

    $newApp = array();
    $newApp["fullname"] = $name;
    $newApp["email"] = $email;
    $newApp["phone"] = $phone;
    $newApp["pet"] = $pet;
    $newApp["experience"] = $experience;

    $data["applications"][] = $newApp;

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    echo json_encode(array("success" => true, "message" => "Application saved."));
    exit;
}

if ($action === "save_user") {
    $name = sanitizeText($_POST["name"]);
    $email = sanitizeEmail($_POST["email"]);
    $password = sanitizeText($_POST["password"]);

    $file = "../data/users.json";
    $data = json_decode(file_get_contents($file), true);

    $newUser = array();
    $newUser["name"] = $name;
    $newUser["email"] = $email;
    $newUser["password"] = $password;

    $data["users"][] = $newUser;

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    echo json_encode(array("success" => true, "message" => "Account created."));
    exit;
}

if ($action === "get_users") {
    $json = file_get_contents("../data/users.json");
    echo $json;
    exit;
}

echo json_encode(array("success" => false, "message" => "Unknown action."));
