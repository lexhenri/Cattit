# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Subcattit.destroy_all
Post.destroy_all
User.destroy_all

loiny = User.create!({username: 'tenderloin420', password: 'kittens', email: 'shitlord69@meow.io'});
freddy = User.create!({username: 'Freddy', password: 'kittens', email: 'freddy@meow.io'});
shasta = User.create!({username: 'littleShasta', password: 'kittens', email: 'tinykitty@meow.io'});
blackie = User.create!({username: 'porchMaster', password: 'kittens', email: 'blackie@meow.io'});
punkin = User.create!({username: 'Punkin', password: 'kittens', email: 'pumpkin@meow.io'});
cinderblock = User.create!({username: 'Cinderblock', password: 'kittens', email: 'cindy@meow.io'});
breakfast = User.create!({username: 'Breakfast', password: 'kittens', email: 'mew@meow.io'});

owls = Subcattit.create!({name: "owls", description: "like us but fly"});
herbs = Subcattit.create!({name: "herbs", description: "for discussion of ACTUAL HERBS"});
mice = Subcattit.create!({name: "mice", description: "Mice are friends! Not food! Seriously though. Stop memeing."});
yarn = Subcattit.create!({name: "yarn", description: "This is about actual yarn. Cat's can't program!"});
memes = Subcattit.create!({name: 'esoteric memes', description: "wazaaaahhhhh"});

Post.create!({author_id: breakfast.id, subcattit_id: yarn.id, title: 'Seriously?', body: 'Cat`s can totally program! Cattist scum!'});
Post.create!({author_id: shasta.id, subcattit_id: herbs.id, title: 'I`M SERIOUS, STOP ASKING ABOUT CATNIP', body: 'There is literally an entire other discussion board. I`ve cleared this subcattit now. Next nipper gets the ban hammer!'});
Post.create!({author_id: punkin.id, subcattit_id: owls.id, title: 'Made friends with an owl today', body: 'Lowkey afraid she`s gonna peck my eyes myout. Am I being ridiculous?'});
Post.create!({author_id: loiny.id, subcattit_id: mice.id, title: 'Mice as hats?', body: 'I wwears themm on mi head?'});
Post.create!({author_id: punkin.id, subcattit_id: mice.id, title: 'Friendly reminder', body: 'TO STOP SHITPOSTING'});
Post.create!({author_id: cinderblock.id, subcattit_id: mice.id, title: 'Mice friend meeems', body: 'Can we get some?'});
Post.create!({author_id: shasta.id, subcattit_id: mice.id, title: 'Need advice', body: 'I made a friends with many mice but my owners hate it! They say I`m a bad cat. What do I do?'});
Post.create!({author_id: freddy.id, subcattit_id: mice.id, title: 'What does this mean?', body: 'The enormous room on the ground floor faced towards the north. Cold for all the summer beyond the panes, for all the tropical heat of the room itself, a harsh thin light glared through the windows, hungrily seeking some draped lay figure, some pallid shape of academic goose-flesh, but finding only the glass and nickel and bleakly shining porcelain of a laboratory. Wintriness responded to wintriness. The overalls of the workers were white, their hands gloved with a pale corpse-coloured rubber. The light was frozen, dead, a ghost. Only from the yellow barrels of the microscopes did it borrow a certain rich and living substance, lying along the polished tubes like butter, streak after luscious streak in long recession down the work tables.'});
