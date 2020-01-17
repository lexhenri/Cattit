# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

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

owls = Subcattit.create!({name: "owls", description: "like us but fly", num_members: '201k', num_online: '600', member_desc: 'human watchers', online_desc: 'hooting'});
herbs = Subcattit.create!({name: "herbs", description: "for discussion of ACTUAL HERBS. NOT. CATNIP.", num_members: '341k', num_online: '1.2k', member_desc: 'botanists', online_desc: 'nibbling leaves'});
mice = Subcattit.create!({name: "mice", description: "Mice are friends! Not food! Seriously though. Stop memeing.", num_members: '23k', num_online: '471', member_desc: 'interspecies activists', online_desc: 'making fwends'});
litcats = Subcattit.create!({name: "lit-cats", description: "For literary cats. Please see mew/catnip for related lit needs.", num_members: '19k', num_online: '41', member_desc: 'mini faulkners', online_desc: 'pondering pages'});
memes = Subcattit.create!({name: 'esoteric-memes', description: "wazaaaahhhhh. if you found this by yourself you are very special!", num_members: '42', num_online: '∞', member_desc: 'dedicated researchers', online_desc: 'being watched'});
catnip = Subcattit.create!({name: 'catnip', description: "when yr so high u know wats uppp", num_members: '420', num_online: '∞', member_desc: 'dedicated researchers', online_desc: 'rolling around'});

Post.create!({author_id: breakfast.id, subcattit_id: litcats.id, title: 'Need Recommendations', body: "I'm not really sure but my human has super trash book taste. Can anyone help me help them move on from Salinger derivatives. Please. If he quotes it again I'm gonna pee on the couch.", num_comments: 91, upvotes: 112});
Post.create!({author_id: shasta.id, subcattit_id: herbs.id, title: "I'M SERIOUS, STOP ASKING ABOUT CATNIP", body: "There is literally an entire other discussion board. I've cleared this subcattit now. Next tipsy bastard gets the ban hammer!", num_comments: 19, upvotes: 420});
Post.create!({author_id: punkin.id, subcattit_id: owls.id, title: 'Made friends with an owl today', body: "Lowkey afraid she's gonna peck my eyes myout. Am I being ridiculous?", num_comments: 2, upvotes: 3});
Post.create!({author_id: loiny.id, subcattit_id: mice.id, title: 'Mice as hats?', body: 'I wwears themm on mi head?', num_comments: 3, upvotes: 9});
Post.create!({author_id: punkin.id, subcattit_id: mice.id, title: 'Friendly reminder', body: 'TO STOP SHITPOSTING', num_comments: 7, upvotes: 42});
Post.create!({author_id: cinderblock.id, subcattit_id: mice.id, title: 'Mice friend meeems', body: 'Can we get some?', num_comments: 23, upvotes: 999});
Post.create!({author_id: shasta.id, subcattit_id: mice.id, title: 'Need advice', body: "I made a friends with many mice but my owners hate it! They say I'm a bad cat. What do I do?", num_comments: 2, upvotes: 23});
Post.create!({author_id: freddy.id, subcattit_id: litcats.id, title: 'What does this mean?', body: 'The enormous room on the ground floor faced towards the north. Cold for all the summer beyond the panes, for all the tropical heat of the room itself, a harsh thin light glared through the windows, hungrily seeking some draped lay figure, some pallid shape of academic goose-flesh, but finding only the glass and nickel and bleakly shining porcelain of a laboratory. Wintriness responded to wintriness. The overalls of the workers were white, their hands gloved with a pale corpse-coloured rubber. The light was frozen, dead, a ghost. Only from the yellow barrels of the microscopes did it borrow a certain rich and living substance, lying along the polished tubes like butter, streak after luscious streak in long recession down the work tables.', num_comments: 32, upvotes: 10});

mice_icon = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/mice_icon.jpg')
mice_banner = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/mice_banner.jpg')

catnip_icon = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/catnip_icon.jpg')
catnip_banner = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/catnip_banner.jpg')

herbs_icon = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/herbs_icon.jpg')
herbs_banner = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/herbs_banner.jpeg')

litcats_icon = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/litcats_icon.jpg')
litcats_banner = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/litcats_banner.jpg')

owls_icon = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/owls_icon.jpg')
owls_banner = open('https://cattit-seeds.s3-us-west-1.amazonaws.com/owls_banner.jpeg')

owls.banner.attach(io: owls_banner, filename: 'owls_banner.jpg')
litcats.banner.attach(io: litcats_banner, filename: 'litcats_banner.jpg')
herbs.banner.attach(io: herbs_banner, filename: 'herbs_banner.jpg')
catnip.banner.attach(io: catnip_banner, filename: 'catnip_banner.jpg')
mice.banner.attach(io: mice_banner, filename: 'mice_banner.jpg')

mice.icon.attach(io: mice_icon, filename: 'mice_icon.jpg')
catnip.icon.attach(io: catnip_icon, filename: 'catnip_icon.jpg')
herbs.icon.attach(io: herbs_icon, filename: 'herbs_icon.jpg')
owls.icon.attach(io: owls_icon, filename: 'owls_icon.jpg')
litcats.icon.attach(io: litcats_icon, filename: 'litcats_icon.jpg')