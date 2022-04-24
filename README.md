# password-generator
An app that will generate a random password based on criteria that the user selects.

The generator is not truly random as it ensures to include a character from each of the selected 
criteria. A truly random generator may have poor results as it wouldn't always take 
the user's choices into consideration.

If I were to further improve this app, I would add a function to shuffle the final result so that 
the first characters aren't always made up of the user choices in order.

# Screenshot
./assets/screenshot_password_generator.jpg

# Links
Live app: https://lonelyorphan.github.io/password-generator/
Github: https://github.com/LonelyOrphan/password-generator

# Criteria:

password length: 8 - 128 characters
lowercase: abcdefghijklmnopqrstuvwxyz
uppercase: ABCDEFGHIJKLMNOPQRSTUVWXYZ
numeric: 0123456789
special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

# User Journey:

User clicks on button
User will be prompted to enter the password length (10)
User presented with confirm for lowercase
User presented with confirm for uppercase
User presented with confirm for numeric
User presented with confirm for special characters
User is presented with the password