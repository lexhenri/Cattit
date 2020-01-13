# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Subcattit.destroy_all
Post.destroy_all
# User.destroy_all

# User.create!({username: 'tenderloin420', password: 'kittens', email: 'shitlord69@meow.io'});
# User.create!({username: 'Freddy', password: 'kittens', email: 'freddy@meow.io'});
# User.create!({username: 'littleShasta', password: 'kittens', email: 'tinykitty@meow.io'});
# User.create!({username: 'porchMaster', password: 'kittens', email: 'blackie@meow.io'});
# User.create!({username: 'Punkin', password: 'kittens', email: 'pumpkin@meow.io'});
# User.create!({username: 'Cinderblock', password: 'kittens', email: 'cindy@meow.io'});
# User.create!({username: 'Breakfast', password: 'kittens', email: 'mew@meow.io'});

# Subcattit.create!({name: 'esoteric memes', description: "wazaaaahhhhh"});
# Subcattit.create!({name: "owls", description: "like us but fly"});
# Subcattit.create!({name: "herbs", description: "for discussion of ACTUAL HERBS"});
# Subcattit.create!({name: "mice", description: "Mice are friends! Not food! Seriously though. Stop memeing."});
# Subcattit.create!({name: "yarn", description: "This is about actual yarn. Cat's can't program!"});

Post.create!({author_id: '7', subcattit_id: '1', title: 'Seriously?', body: 'Cat`s can totally program! Cattist scum!'});
Post.create!({author_id: '4', subcattit_id: '2', title: 'I`M SERIOUS, STOP ASKING ABOUT CATNIP', body: 'There is literally an entire other discussion board. I`ve cleared this subcattit now. Next nipper gets the ban hammer!'});
Post.create!({author_id: '5', subcattit_id: '4', title: 'Made friends with an owl today', body: 'Lowkey afraid she`s gonna peck my eyes myout. Am I being ridiculous?'});
Post.create!({author_id: '1', subcattit_id: '3', title: 'Mice as hats?', body: 'I wwears themm on mi head?'});
Post.create!({author_id: '5', subcattit_id: '3', title: 'Friendly reminder', body: 'TO STOP SHITPOSTING'});
Post.create!({author_id: '6', subcattit_id: '3', title: 'Mice friend meeems', body: 'Can we get some?'});
Post.create!({author_id: '3', subcattit_id: '3', title: 'Need advice', body: 'I made a friends with many mice but my owners hate it! They say I`m a bad cat. What do I do?'});
Post.create!({author_id: '2', subcattit_id: '3', title: 'What does this mean?', body: 'The enormous room on the ground floor faced towards the north. Cold for all the summer beyond the panes, for all the tropical heat of the room itself, a harsh thin light glared through the windows, hungrily seeking some draped lay figure, some pallid shape of academic goose-flesh, but finding only the glass and nickel and bleakly shining porcelain of a laboratory. Wintriness responded to wintriness. The overalls of the workers were white, their hands gloved with a pale corpse-coloured rubber. The light was frozen, dead, a ghost. Only from the yellow barrels of the microscopes did it borrow a certain rich and living substance, lying along the polished tubes like butter, streak after luscious streak in long recession down the work tables.'});
