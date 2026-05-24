<?php

function sanitizeText($input)
{
    $input = trim($input);
    $input = htmlspecialchars($input, ENT_QUOTES, "UTF-8");
    return $input;
}

function sanitizeEmail($input)
{
    $input = trim($input);
    $input = filter_var($input, FILTER_SANITIZE_EMAIL);
    return $input;
}
