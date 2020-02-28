//AUTH ACTION TYPES

export const LOGIN_INIT = "LOGIN_INIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const BUSINESS_LOGIN_INIT = "BUSINESS_LOGIN_INIT";
export const BUSINESS_LOGIN_SUCCESS = "BUSINESS_LOGIN_SUCCESS";
export const BUSINESS_LOGIN_FAILURE = "BUSINESS_LOGIN_FAILURE";

export const SIGNUP_INIT = "SIGNUP_INIT";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const BUSINESS_SIGNUP_INIT = "BUSINESS_SIGNUP_INIT";
export const BUSINESS_SIGNUP_SUCCESS = "BUSINESS_SIGNUP_SUCCESS";
export const BUSINESS_SIGNUP_FAILURE = "BUSINESS_SIGNUP_FAILURE";

export const TRUST_VOTE_INIT = "TRUST_VOTE_INIT";
export const TRUST_VOTE_SUCCESS = "TRUST_VOTE_SUCCESS";
export const TRUST_VOTE_FAILURE = "TRUST_VOTE_FAILURE";

export const OAUTH_SIGNIN_INIT = "OAUTH_SIGNIN_INIT";
export const OAUTH_SIGNIN_END = "OAUTH_SIGNIN_END";

export const LOGOUT = "LOGOUT";

export const SEND_TRUST_DATA_LATER = "SEND_TRUST_DATA_LATER";
export const REDIRECT_TO_LOGIN_WITH_EMAIL = "REDIRECT_TO_LOGIN_WITH_EMAIL";

export const ACTIVATE_USER_INIT = "ACTIVATE_USER_INIT";
export const ACTIVATE_USER_SUCCESS = "ACTIVATE_USER_SUCCESS";
export const ACTIVATE_USER_FAILURE = "ACTIVATE_USER_FAILURE";

export const VERIFY_RESET_PASSWORD_TOKEN_INIT =
  "VERIFY_RESET_PASSWORD_TOKEN_INIT";
export const VERIFY_RESET_PASSWORD_TOKEN_SUCCESS =
  "VERIFY_RESET_PASSWORD_TOKEN_SUCCESS";
export const VERIFY_RESET_PASSWORD_TOKEN_FAILURE =
  "VERIFY_RESET_PASSWORD_TOKEN_FAILURE";

export const RESET_PASSWORD_INIT = "RESET_PASSWORD_INIT";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

export const SET_BUSINESS_SUBSCRIPTION = "SET_BUSINESS_SUBSCRIPTION ";

//DOMAIN DATA TYPES
export const SET_DOMAIN_DATA_IN_REDUX = "SET_DOMAIN_DATA_IN_REDUX";
export const SET_DOMAIN_PROFILE_LOADER = "SET_DOMAIN_PROFILE_LOADER";
export const REDIRECT_TO_REGISTRATION_WITH_DOMAIN_PREFILL =
  "REDIRECT_TO_REGISTRATION_WITH_DOMAIN_PREFILL";

//DASHBOARD DATA TYPES
export const SET_GET_REVIEWS_DATA = "SET_GET_REVIEWS_DATA";

export const SEND_GET_REVIEWS_INIT = "SEND_GET_REVIEWS_INIT";
export const SEND_GET_REVIEWS_SUCCESS = "SEND_GET_REVIEWS_SUCCESS";
export const SEND_GET_REVIEWS_FAILURE = "SEND_GET_REVIEWS_FAILURE";

export const LOCATE_PLACE_INIT = "LOCATE_PLACE_INIT";
export const LOCATE_PLACE_SUCCESS = "LOCATE_PLACE_SUCCESS";
export const LOCATE_PLACE_FAILURE = "LOCATE_PLACE_FAILURE";

export const TRANSACTION_HISTORY_INIT = "TRANSACTION_HISTORY_INIT";
export const TRANSACTION_HISTORY_SUCCESS = "TRANSACTION_HISTORY_SUCCESS";
export const TRANSACTION_HISTORY_FAILURE = "TRANSACTION_HISTORY_FAILURE";

export const CREATE_CAMPAIGN_INIT = "CREATE_CAMPAIGN_INIT";
export const CREATE_CAMPAIGN_SUCCESS = "CREATE_CAMPAIGN_SUCCESS";
export const CREATE_CAMPAIGN_FAILURE = "CREATE_CAMPAIGN_FAILURE";

export const FETCH_CAMPAIGN_LANGUAGE_INIT = "FETCH_CAMPAIGN_LANGUAGE_INIT";
export const FETCH_CAMPAIGN_LANGUAGE_SUCCESS =
  "FETCH_CAMPAIGN_LANGUAGE_SUCCESS";
export const FETCH_CAMPAIGN_LANGUAGE_FAILURE =
  "FETCH_CAMPAIGN_LANGUAGE_FAILURE";

export const SET_QUOTA_DETAILS = "SET_QUOTA_DETAILS";

export const SHOW_GET_STARTED = "SHOW_GET_STARTED";

//Start Loading on Router.push
export const START_LOADING_ON_ROUTER_PUSH = "START_LOADING_ON_ROUTER_PUSH";
export const STOP_LOADING_ON_ROUTER_PUSH = "STOP_LOADING_ON_ROUTER_PUSH";

//Resent Activation Link
export const RESEND_ACTIVATION_LINK_INIT = "RESEND_ACTIVATION_LINK_INIT";
export const RESEND_ACTIVATION_LINK_SUCCESS = "RESEND_ACTIVATION_LINK_SUCCESS";
export const RESEND_ACTIVATION_LINK_FAILURE = "RESEND_ACTIVATION_LINFAILURE";

export const SET_USER_ACTIVATED = "SET_USER_ACTIVATED";

//UPGRADE TO PREMIUM
export const UPGRADE_TO_PREMIUM_INIT = "UPGRADE_TO_PREMIUM_INIT";
export const UPGRADE_TO_PREMIUM_SUCCESS = "UPGRADE_TO_PREMIUM_SUCCESS";
export const UPGRADE_TO_PREMIUM_FAILURE = "UPGRADE_TO_PREMIUM_FAILURE";

//Create Campaign language
export const SET_CAMPAIGN_LANGUAGE = "SET_CAMPAIGN_LANGUAGE";

//Fetch email template
export const FETCH_EMAIL_TEMPLATE_INIT = "FETCH_EMAIL_TEMPLATE_INIT";
export const FETCH_EMAIL_TEMPLATE_SUCCESS = "FETCH_EMAIL_TEMPLATE_SUCCESS";
export const FETCH_EMAIL_TEMPLATE_FAILURE = "FETCH_EMAIL_TEMPLATE_FAILURE";

// Review Pusher
export const SET_REVIEWS_PUSHER_CONNECT = "SET_REVIEWS_PUSHER_CONNECT";

//Claim this domain
export const REPORT_DOMAIN_INIT = "REPORT_DOMAIN_INIT";
export const REPORT_DOMAIN_SUCCESS = "REPORT_DOMAIN_SUCCESS";
export const REPORT_DOMAIN_FAILURE = "REPORT_DOMAIN_FAILURE";

export const REPORT_DOMAIN_AFTER_LOGIN = "REPORT_DOMAIN_AFTER_LOGIN";

// Set aggregate data in Redux
export const GET_AGGREGATE_DATA_INIT = "SET_AGGREGATE_DATA_INIT";
export const GET_AGGREGATE_DATA_SUCCESS = "SET_AGGREGATE_DATA_SUCCESS";
export const GET_AGGREGATE_DATA_FAILURE = "SET_AGGREGATE_DATA_FAILURE";
export const SET_AGGREGATE_DATA_SUCCESS = "SET_AGGREGATE_DATA_SUCCESS";
export const REMOVE_AGGREGATE_DATA = "REMOVE_AGGREGATE_DATA ";

//Fetch profile reviews action
export const FETCH_PROFILE_REVIEWS_INITIALLY =
  "FETCH_PROFILE_REVIEWS_INITIALLY";

export const FETCH_PROFILE_REVIEWS_INIT = "FETCH_PROFILE_REVIEWS_INIT";
export const FETCH_PROFILE_REVIEWS_SUCCESS = "FETCH_PROFILE_REVIEWS_SUCCESS";
export const FETCH_PROFILE_REVIEWS_FAILURE = "FETCH_PROFILE_REVIEWS_FAILURE";

//Update user profile data
export const UPDATE_USER_DETAILS_INIT = "UPDATE_USER_DETAILS_INIT";
export const UPDATE_USER_DETAILS_SUCCESS = "UPDATE_USER_DETAILS_SUCCESS";
export const UPDATE_USER_DETAILS_ERROR = "UPDATE_USER_DETAILS_ERROR";

export const EMPTY_USER_DETAILS = "EMPTY_USER_DETAILS";

export const UPDATE_COMPANY_DETAILS_INIT = "UPDATE_COMPANY_DETAILS_INIT";
export const UPDATE_COMPANY_DETAILS_SUCCESS = "UPDATE_COMPANY_DETAILS_SUCCESS";
export const UPDATE_COMPANY_DETAILS_ERROR = "UPDATE_COMPANY_DETAILS_ERROR";

export const EMPTY_COMPANY_DETAILS = "EMPTY_COMPANY_DETAILS";

export const UPDATE_DOMAIN_DETAILS_INIT = "UPDATE_DOMAIN_DETAILS_INIT";
export const UPDATE_DOMAIN_DETAILS_SUCCESS = "UPDATE_DOMAIN_DETAILS_SUCCESS";
export const UPDATE_DOMAIN_DETAILS_ERROR = "UPDATE_DOMAIN_DETAILS_ERROR";

export const EMPTY_DOMAIN_DETAILS = "EMPTY_DOMAIN_DETAILS";

export const FETCH_REVIEWS_INIT = "FETCH_REVIEWS_INIT";
export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";
export const FETCH_REVIEWS_FAILURE = "FETCH_REVIEWS_FAILURE";

export const UPDATE_AUTH_SOCIAL_ARRAY = "UPDATE_AUTH_SOCIAL_ARRAY";

//Send Automatic Invitation Form Data

export const POST_AUTOMATIC_INVITATION_CONFIG_INIT =
  "POST_AUTOMATIC_INVITATION_CONFIG_INIT";
export const POST_AUTOMATIC_INVITATION_CONFIG_SUCCESS =
  "POST_AUTOMATIC_INVITATION_CONFIG_SUCCESS";
export const POST_AUTOMATIC_INVITATION_CONFIG_FAILURE =
  "POST_AUTOMATIC_INVITATION_CONFIG_FAILURE";

export const GET_AVAILABLE_PLATFORMS_INIT = "GET_AVAILABLE_PLATFORMS_INIT";
export const GET_AVAILABLE_PLATFORMS_SUCCESS =
  "GET_AVAILABLE_PLATFORMS_SUCCESS";
export const GET_AVAILABLE_PLATFORMS_FAILURE =
  "GET_AVAILABLE_PLATFORMS_FAILURE";

export const UPDATE_AUTH_STATE_WITH_CONFIG_DETAILS =
  "UPDATE_AUTH_STATE_WITH_CONFIG_DETAILS";

//Request Installation

export const REQUEST_INSTALLATION_INIT = "REQUEST_INSTALLATION_INIT";
export const REQUEST_INSTALLATION_SUCCESS = "REQUEST_INSTALLATION_SUCCESS";
export const REQUEST_INSTALLATION_FAILURE = "REQUEST_INSTALLATION_FAILURE";

//Campaign Management

export const FETCH_CAMPAIGNS_INIT = "FETCH_CAMPAIGNS_INIT";
export const FETCH_CAMPAIGNS_SUCCESS = "FETCH_CAMPAIGNS_SUCCESS";
export const FETCH_CAMPAIGNS_FAILURE = "FETCH_CAMPAIGNS_FAILURE";

export const CHANGE_CAMPAIGN_STATUS_INIT = "CHANGE_CAMPAIGN_STATUS_INIT";
export const CHANGE_CAMPAIGN_STATUS_SUCCESS = "CHANGE_CAMPAIGN_STATUS_SUCCESS";
export const CHANGE_CAMPAIGN_STATUS_FAILURE = "CHANGE_CAMPAIGN_STATUS_FAILURE";

export const SET_CAMPAIGN_EDIT_MODE = "SET_CAMPAIGN_EDIT_MODE";

//Get Smart Url
export const GET_SMART_URL_INIT = "GET_SMART_URL_INIT";
export const GET_SMART_URL_SUCCESS = "GET_SMART_URL_SUCCESS";
export const GET_SMART_URL_ERROR = "GET_SMART_URL_ERROR";

//Add review platforms
export const ADD_REVIEW_PLATFORM_INIT = "ADD_REVIEW_PLATFORM_INIT";
export const ADD_REVIEW_PLATFORM_SUCCESS = "ADD_REVIEW_PLATFORM_SUCCESS";
export const ADD_REVIEW_PLATFORM_ERROR = "ADD_REVIEW_PLATFORM_ERROR";

//ADD_NEW_PLATFORM_IN_REVIEW_PLATFORMS
export const ADD_NEW_PLATFORM_IN_REVIEW_PLATFORMS =
  "ADD_NEW_PLATFORM_IN_REVIEW_PLATFORMS";

//GET AVAILABLE REVIEW PLATFORMS
export const GET_AVAILABLE_REVIEW_PLATFORMS_INIT =
  "GET_AVAILABLE_REVIEW_PLATFORMS_INIT";
export const GET_AVAILABLE_REVIEW_PLATFORMS_SUCCESS =
  "GET_AVAILABLE_REVIEW_PLATFORMS_SUCCESS";
export const GET_AVAILABLE_REVIEW_PLATFORMS_FAILURE =
  "GET_AVAILABLE_REVIEW_PLATFORMS_FAILURE";

//SET_REVIEWS_AFTER_LOGIN
export const SET_REVIEWS_AFTER_LOGIN = "SET_REVIEWS_AFTER_LOGIN";

//SET_LOADING_STATUS_OF_REVIEWS
export const SET_LOADING_STATUS_OF_REVIEWS = "SET_LOADING_STATUS_OF_REVIEWS";

//FETCH_CONFIGURED_REVIEW_PLATFORMS
export const FETCH_CONFIGURED_REVIEW_PLATFORMS_INIT =
  "FETCH_CONFIGURED_REVIEW_PLATFORMS_INIT";
export const FETCH_CONFIGURED_REVIEW_PLATFORMS_SUCCESS =
  "FETCH_CONFIGURED_REVIEW_PLATFORMS_SUCCESS";
export const FETCH_CONFIGURED_REVIEW_PLATFORMS_FAILURE =
  "FETCH_CONFIGURED_REVIEW_PLATFORMS_FAILURE";

//SET_SCRAPING_ARRAY_IN_REDUCER
export const SET_SCRAPING_ARRAY_IN_REDUCER = "SET_SCRAPING_ARRAY_IN_REDUCER";

//Set isNewUser
export const SET_IS_NEW_USER = "SET_IS_NEW_USER";

//Hide review
export const TOGGLE_REVIEW_VISIBILITY_INIT = "TOGGLE_REVIEW_VISIBILITY_INIT";
export const TOGGLE_REVIEW_VISIBILITY_SUCCESS =
  "TOGGLE_REVIEW_VISIBILITY_SUCCESS";
export const TOGGLE_REVIEW_VISIBILITY_FAILURE =
  "TOGGLE_REVIEW_VISIBILITY_FAILURE";

//Set reviews after toggle visibility
export const SET_REVIEWS_AFTER_TOGGLE_VISIBILITY =
  "SET_REVIEWS_AFTER_TOGGLE_VISIBILITY";

//Set review platforms hide/show in widgets
export const SET_WIDGET_PLATFORM_VISIBILITY_INIT =
  "SET_WIDGET_PLATFORM_VISIBILITY_INIT";
export const SET_WIDGET_PLATFORM_VISIBILITY_SUCCESS =
  "SET_WIDGET_PLATFORM_VISIBILITY_SUCCESS";
export const SET_WIDGET_PLATFORM_VISIBILITY_FAILURE =
  "SET_WIDGET_PLATFORM_VISIBILITY_FAILURE";
//Get short review url
export const GET_SHORT_REVIEW_URL_INIT = "GET_SHORT_REVIEW_URL_INIT";
export const GET_SHORT_REVIEW_URL_SUCCESS = "GET_SHORT_REVIEW_URL_SUCCESS";
export const GET_SHORT_REVIEW_URL_ERROR = "GET_SHORT_REVIEW_URL_ERROR";
//WHATSAPP MANUAL INVITATION INIT
export const WHATSAPP_MANUAL_INVITE_INIT = "WHATSAPP_MANUAL_INVITE_INIT";
export const WHATSAPP_MANUAL_INVITE_SUCCESS = "WHATSAPP_MANUAL_INVITE_SUCCESS";
export const WHATSAPP_MANUAL_INVITE_FAILURE = "WHATSAPP_MANUAL_INVITE_FAILURE";
//WHATSAPP MANUAL INVITATION COMMIT
export const WHATSAPP_MANUAL_COMMIT_INIT = "WHATSAPP_MANUAL_COMMIT_INIT";
export const WHATSAPP_MANUAL_COMMIT_SUCCESS = "WHATSAPP_MANUAL_COMMIT_SUCCESS";
export const WHATSAPP_MANUAL_COMMIT_FAILURE = "WHATSAPP_MANUAL_COMMIT_FAILURE";
//WHATSAPP AUTOMATIC INVITATION INIT
export const WHATSAPP_AUTOMATIC_INVITE_INIT = "WHATSAPP_AUTOMATIC_INVITE_INIT";
export const WHATSAPP_AUTOMATIC_INVITE_SUCCESS =
  "WHATSAPP_AUTOMATIC_INVITE_SUCCESS";
export const WHATSAPP_AUTOMATIC_INVITE_FAILURE =
  "WHATSAPP_AUTOMATIC_INVITE_FAILURE";
//WHATSAPP AUTOMATIC INVITATION COMMIT
export const WHATSAPP_AUTOMATIC_COMMIT_INIT = "WHATSAPP_AUTOMATIC_COMMIT_INIT";
export const WHATSAPP_AUTOMATIC_COMMIT_SUCCESS =
  "WHATSAPP_AUTOMATIC_COMMIT_SUCCESS";
export const WHATSAPP_AUTOMATIC_COMMIT_FAILURE =
  "WHATSAPP_AUTOMATIC_COMMIT_FAILURE";
// WHATSAPP AUTOMATIC CREATE CAMPAIGN
export const WHATSAPP_AUTOMATIC_CREATE_CAMPAIGN_INIT =
  "WHATSAPP_AUTOMATIC_CREATE_CAMPAIGN_INIT";
export const WHATSAPP_AUTOMATIC_CREATE_CAMPAIGN_SUCCESS =
  "WHATSAPP_AUTOMATIC_CREATE_CAMPAIGN_SUCCESS";
export const WHATSAPP_AUTOMATIC_CREATE_CAMPAIGN_FAILURE =
  "WHATSAPP_AUTOMATIC_CREATE_CAMPAIGN_FAILURE";
// EMPTY WHATSAPP DATA
export const EMPTY_WHATSAPP_DATA = "EMPTY_WHATSAPP_DATA";
//SHOW WHATSAPP NOTIFICATION BAR
export const SHOW_WHATSAPP_NOTIFICATION_BAR = "SHOW_WHATSAPP_NOTIFICATION_BAR";

// UPDATE SCHEMA DATA
export const UPDATED_SCHEMA_DATA_IN_AUTH = "UPDATED_SCHEMA_DATA_IN_AUTH";

// REVIEWS MONITORING
export const GET_PRODUCT_REVIEWS_PLATFORMS_INIT =
  "GET_PRODUCT_REVIEWS_PLATFORMS_INIT";
export const GET_PRODUCT_REVIEWS_PLATFORMS_SUCCESS =
  "GET_PRODUCT_REVIEWS_PLATFORMS_SUCCESS";
export const GET_PRODUCT_REVIEWS_PLATFORMS_FAILURE =
  "GET_PRODUCT_REVIEWS_PLATFORMS_FAILURE";

export const GET_ALL_PRODUCTS_INIT = "GET_ALL_PRODUCTS_INIT";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAILURE = "GET_ALL_PRODUCTS_FAILURE";

export const ADD_PRODUCT_REVIEWS_PRODUCT_INIT =
  "ADD_PRODUCT_REVIEWS_PRODUCT_INIT";
export const ADD_PRODUCT_REVIEWS_PRODUCT_SUCCESS =
  "ADD_PRODUCT_REVIEWS_PRODUCT_SUCCESS";
export const ADD_PRODUCT_REVIEWS_PRODUCT_FAILURE =
  "ADD_PRODUCT_REVIEWS_PRODUCT_FAILURE";

export const DELETE_PRODUCT_INIT = "DELETE_PRODUCT_INIT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

//PRODUCT REVIEWS

export const FETCH_PRODUCT_REVIEWS_INIT = "FETCH_PRODUCT_REVIEWS_INIT";
export const FETCH_PRODUCT_REVIEWS_SUCCESS = "FETCH_PRODUCT_REVIEWS_SUCCESS";
export const FETCH_PRODUCT_REVIEWS_FAILURE = "FETCH_PRODUCT_REVIEWS_FAILURE";

//UPDATE PRODUCT

export const UPDATE_PRODUCT_INIT = "UPDATE_PRODUCT_INIT";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

//Empty product response

export const EMPTY_PRODUCT_ADD_RESPONSE = "EMPTY_PRODUCT_RESPONSE";
export const EMPTY_PRODUCT_UPDATE_RESPONSE = "EMPTY_PRODUCT_RESPONSE";
