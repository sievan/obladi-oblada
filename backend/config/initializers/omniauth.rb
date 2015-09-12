Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer unless Rails.env.production?
  provider :paypal, ENV['PAYPAL_APP_ID'], ENV['PAYPAL_APP_TOKEN'], sandbox: true, scope: "openid"
end
