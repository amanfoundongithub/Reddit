# Reddit [Greddiit]

### The following features have been made to emulate the actual Reddit: 

1. ### Authentication Part: 
- ` URL : '/signin'`
    - Features a Sign In and a Sign Up mode for the user. 
    - Buttons are placed below to switch between these modes.
    - A Google Sign In and Sign Up facility has been added.
    - All the routes are protected in the backend and password(s) are hashed to keep them safe. 


2. ### Profile Part:
- ` URL : '/profile'`
    - After a successful Sign In, the user is redirected to the Profile Page.  
    - The Profile Page displays the name of the user, the username with which they are represented in our community, a dp [display profile] on their profile, their gender and their age. 
    - Most of the information, except Profile Image and About are taken from the user at the beginning. 
    - Shows the number of followers and following as well on the same page. Clicking on the number(s) leads to modals where the followers/following are displayed. 

- ` URL : '/profile/others'`
    - Users can navigate to profiles of other people using the username [`others`] that is provided to their URL.  
    - If user is not signed in, they can visit any profile they want. 
    - If the username does not exist, the user is redirected to Profile Page if he is logged in or Sign In if he is not.  
    - This page also displays the same batch of information as the Profile Page.
    - It also features an option to `follow` someone or `chat` if they are both mutual followers.

- ` URL : '/mysg'`
    - Shows list of SubReddits that the user has created. Basic details about each of them are shown in the page, along with the DP of the user.  
    - The user has the option to `delete` an existing subreddit or `add` a new subreddit. 
    - The names are clickable and clicking on them will lead to the page of the corresponding subreddit. 

- ` URL : '/mysaved'`
    - Shows the posts user have saved from all the SubReddits that the user has visited.  
    - A list of these posts is displayed. 
    - The user's dp is also displayed. 
    - Removing a post from Saved Posts will lead to the page getting updated. 

3. ### SubReddit / SubGreddiit Part:

- ` URL : '/gr/:name'`
    - The main page of the SubGreddit/SubReddit is shown on going to this URL.
    - There is a cover image and a profile image for each of them. 
    - There is a tab to navigate to different sections. 
    - The tab shows the basic details about the SubGreddit along with the posts in the SubGreddit. 
- ` URL : '/gr/:name/followers'`
    - Goes to the followers Page of the SubGreddiit. 
    - Displays a list of followers and banned users of the SubGreddit. 
    - For the moderator of the SubGreddit, it also features the additional `Joining Requests` Tab. 

- ` URL : '/gr/:name/moderators'`
    - Goes to the Moderators Page of the SubGreddiit. 
    - Displays a list of moderators of the SubGreddiit. 

For the moderators the following are also seen: 
- ` Edit SubGreddiit `
    - Allows the moderator to edit the description, the profile image and the cover image of the SubGreddiit. 

- `  Reports`
    - Shows all the reports done by the users who have reported the posts of another non-moderator users. 

- ` Stats`
    - Displays the statistics of the SubGreddiit over the time for the moderators.

4. ### Home Page Part: 
Displays the Home page where the user can go and search the subgreddiits based on the features or parameters they provide. 