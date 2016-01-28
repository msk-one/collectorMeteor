/**
 * Created by wpiot on 28.01.2016.
 */

Accounts.onCreateUser(function(options, user) {
    user.username = options.username;
    user.uid = options.uid;
    user.password = options.password;
    return user;
});
