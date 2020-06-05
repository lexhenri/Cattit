class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?
  before_action :set_locale

  def login!(user)
    session[:session_token] = user.reset_session_token!
    current_user = user
  end

  def logout!
   current_user.reset_session_token!
   @current_user = nil
   session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def require_logged_in
    unless current_user
      render json: { base: ['Forbidden'] }, status: 418
    end
  end

  
private

def set_locale
  I18n.locale = extract_locale || I18n.default_locale
end

def extract_locale
  parsed_locale = params[:locale]
  I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
end

def default_url_options
  { locale: I18n.locale }
end


  # def switch_locale(&action)
  #   locale = extract_locale_from_tld || I18n.default_locale
  #   I18n.with_locale(locale, &action)
  # end

  
#   def switch_locale(&action)
#     logger.debug "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
#     locale = extract_locale_from_accept_language_header
#     logger.debug "* Locale set to '#{locale}'"
#     I18n.with_locale(locale, &action)
#   end

#   def set_locale
#     locale = params[:locale].to_s.strip.to_sym
#     I18n.locale = I18n.available_locales.include?(locale) ?
#         locale :
#         I18n.default_locale
#   end

#   def extract_locale_from_tld
#     parsed_locale = request.host.split('.').last
#     I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
#   end

#   def default_url_options
#     { locale: I18n.locale }
#   end

# private

# private
#   def extract_locale_from_accept_language_header
#     request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
#   end
# def set_locale
#   # I18n.locale = extract_locale || I18n.default_locale
#   I18n.locale = http_accept_language.compatible_language_from(I18n.available_locales)
# end

# def extract_locale
#   parsed_locale = params[:locale]
#   I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
# end

# def default_url_options
#   { locale: I18n.locale }
# end


end
