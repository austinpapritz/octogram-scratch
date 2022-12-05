# Octogram App

![](/assets/wireframe.png)

## Plan

    - Table in Supabase connected to auth table
    - User is directed to main page where they will see a list of users
        - create container for user cards in HTML
        - FetchAllUsers and display users on load
        - Event listener on each card which will redirect user to user profile
    - When profile is chosen
        - fetchUser(id) by user_id by URL and avatar, bio, rating
        - display all profile info (avatar, bio, rating, username)
        - renderProfile
        - Event listener on profile for stars rating system. increment/decrementStars function (redisplay profile)
