var Auteur = function(user_created_at, user_screen_name,user_default_profile_image,user_description,user_favourites_count,user_followers_count,user_friends_count,user_listed_count,user_location,user_name,user_statuses_count,user_time_zone,user_urls,user_verified,retweet_count){
    this.user_created_at=user_created_at;
    this.user_screen_name=user_screen_name;
    this.user_default_profile_image=user_default_profile_image;
    this.user_description=user_description;
    this.user_favourites_count=user_favourites_count;
    this.user_followers_count=user_followers_count;
    this.user_friends_count=user_friends_count;
    this.user_listed_count=user_listed_count;
    this.user_location=user_location;
    this.user_name=user_name;
    this.user_statuses_count=user_statuses_count;
    this.user_time_zone=user_time_zone;
    this.user_urls=user_urls;
    this.user_verified=user_verified;
    this.retweet_count=retweet_count;
    this.recurrence=1;
}
module.exports = Auteur;