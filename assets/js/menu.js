$(document).ready(function() {

    let data = {
            domain: "https://shinobichronicles.com/",
            training: {
                methods: {
                    skill: ["ninjutsu", "genjutsu", "taijutsu", "bloodline"],
                    attributes: ["speed", "cast_speed", "intelligence", "willpower"]
                }
            },
            ai: {
                1: [
                    {id:1,name:"Annoying Crow",money:20},
                    {id:2,name:"Academy Bully",money:35},
                    {id:3,name:"Prodigy Student",money:45}],
                2: [
                    {id:4,name:"Academy Graduate",money:50},
                    {id:13,name:"Crafty Kunoichi",money:40},
                    {id:5,name:"Advanced Genin",money:50},
                    {id:6,name:"Weapon Fanatic",money:60},
                    {id:10,name:"Talented Genin",money:"?"},
                ],
                3: [
                    {id:12,name:"Jounin's Shadow Clone",money:85},
                    {id:9,name:"Novice Chuunin",money:125},
                    {id:8,name:"Genin Trio",money:100},
                    {id:7,name:"Furious Tiger",money:70}
                ],
                4: [
                    {id:19,name:"Tetsu Yoki",money:"10"},
                    {id:18,name:"ANBU Captain",money:"200"},
                    {id:17,name:"Enemy ANBU",money:"175"},
                    {id:16,name:"Rogue Samurai",money:"140"},
                    {id:15,name:"Village Outlaw",money:"115"},
                    {id:14,name:"Chuunin Expert",money:"100"},
                ]
            },
            ranks: {
                1: {
                    id: 1,
                    name: "Akademi-sei",
                    jutsu: {
                        ninjutsu: [
                            {id:2,name:"Synergized Channeling",hand_seals:"12-8-1"},
                            {id:4,name:"Basic Replacement",hand_seals:"1-2"},
                            {id:6,name:"Chakra Torrent",hand_seals:"10-7"},
                            {id:12,name:"Transformation Trickery",hand_seals:"3-2-12"},
                            {id:87,name:"Clone Combo",hand_seals:"2-7-3-9-6"}
                        ],
                        genjutsu: [
                            {id:9,name:"Deceiving Environment",hand_seals:"6-4-3-7"},
                            {id:10,name:"Multiple Clone Panic",hand_seals:"6-2-5-3"},
                            {id:26,name:"Searing Agony",hand_seals:"12"},
                        ],
                        taijutsu: [
                            {id:1,name:"Spinning Stars",hand_seals:"1433"},
                            {id:3,name:"Standard Strike",hand_seals:"106"},
                            {id:8,name:"Kiddy Combo",hand_seals:"165"},
                            {id:13,name:"Unexpected Sting",hand_seals:"100"},
                            {id:14,name:"Reeling Blow",hand_seals:"101"},
                        ],
                    }
                },
                2: {
                    id: 2,
                    name: "Genin",
                    jutsu: {
                        ninjutsu: [
                            {id:7,name:"Triggered Explosion",hand_seals:"9-7"},
                            {id:15,name:"Augmented Shuriken",hand_seals:"3-8"},
                            {id:17,name:"Chakra Needles",hand_seals:"11-1-2"},
                            {id:18,name:"Chakra Distortion",hand_seals:"6-3-12-10"},
                            {id:24,name:"Energy Flare",hand_seals:"7-1-4"}
                        ],
                        genjutsu: [
                            {id:11,name:"Genjutsu Release",hand_seals:"9-6"},
                            {id:21,name:"Smoke Mirror",hand_seals:"1-12"},
                            {id:22,name:"Realm of Desolation",hand_seals:"11-8-1-5"},
                            {id:25,name:"Caves of Disillusion",hand_seals:"5-1-3-8"},
                            {id:27,name:"Chakra Negation",hand_seals:"4-10-2"}
                        ],
                        taijutsu: [
                            {id:16,name:"Ascending Hawk Strike",hand_seals:"102"},
                            {id:19,name:"Projectile Barrage",hand_seals:"104"},
                            {id:20,name:"Rhythmic Assault",hand_seals:"105"},
                            {id:23,name:"Wired Weaponry",hand_seals:"138"},
                            {id:28,name:"Aerial Hammer",hand_seals:"1112"}
                        ]
                    }
                },
                3: {
                    id: 3,
                    name: "Chuunin",
                    jutsu: {
                        ninjutsu: [
                            {id:29,name:"Dragon's Scorn",hand_seals:"12-10-5-6-3"},
                            {id:30,name:"Intensifying Heat",hand_seals:"10-5-3-4-8"},
                            {id:31,name:"Chilling Tides",hand_seals:"3-5-10-4-1"},
                            {id:32,name:"Liquid Bullet",hand_seals:"7-3-9-2-11"},
                            {id:33,name:"Dancing Winds",hand_seals:"5-4-8-12-2"},
                            {id:34,name:"Cleaving Moon Crescent",hand_seals:"3-7-2-1"},
                            {id:35,name:"Poisonous Haze",hand_seals:"6-1-5-12-8"},
                            {id:36,name:"Contained Detonation",hand_seals:"7-1-9-2-12"},
                            {id:37,name:"Jolting Circuit",hand_seals:"11-7-12-9"},
                            {id:38,name:"Shallow Ground",hand_seals:"3-2-7-10"},
                            {id:39,name:"Electrical Clones",hand_seals:"4-8-11-3-2"},
                            {id:40,name:"Earthly Weapons",hand_seals:"10-2-9-4-11"},
                            {id:41,name:"Propelling Burst",hand_seals:"8-3-5-1"},
                            {id:54,name:"Preliminary Seal",hand_seals:"2-7-1-6-11"},
                            {id:60,name:"Chakra Seal Release",hand_seals:"8-10"}

                        ],
                        genjutsu: [
                            {id:45,name:"Inverted World",hand_seals:"11-2-12-1-8"},
                            {id:46,name:"Consuming Blizzard",hand_seals:"3-1-5-11"},
                            {id:47,name:"Time Alteration",hand_seals:"4-1-7-3-12"},
                            {id:48,name:"Feasting Blade",hand_seals:"10-12-6-3-7"},
                            {id:49,name:"Calmed Awareness",hand_seals:"9-1"},
                            {id:53,name:"Crawling Flesh",hand_seals:"3-9-5-12-6-1"},
                            {id:55,name:"Piercing Soundwave",hand_seals:"5-7-4-8"},
                            {id:56,name:"Shuriken Storm Illusion",hand_seals:"1-10-3-4-2"},
                            {id:61,name:"Mental Vigor",hand_seals:"1-8"}
                        ],
                        taijutsu: [
                            {id:42,name:"Graceful Flying Falcon",hand_seals:"1008"},
                            {id:43,name:"Tracheal Smash",hand_seals:"1009"},
                            {id:44,name:"Somersault Spring",hand_seals:"1010"},
                            {id:50,name:"Triple Shadow Spiral",hand_seals:"1011"},
                            {id:51,name:"Distorted Systems",hand_seals:"1012"},
                            {id:52,name:"Inverted Swallow",hand_seals:"1013"},
                            {id:57,name:"Tears of the Dragon",hand_seals:"1014"},
                            {id:58,name:"Ki of the Swift Rabbit",hand_seals:"1015"},
                            {id:59,name:"Hachimon: Kai",hand_seals:"4-11"}
                        ]
                    }
                },
                4: {
                    id: 4,
                    name: "Jonin",
                    jutsu: {
                        ninjutsu: [
                            {id:62,name:"Gaia's Armory",hand_seals:"10-2-9-4-11-1"},
                            {id:63,name:"Flames of the Wicked",hand_seals:"12-10-5-6-3-9"},
                            {id:64,name:"Flame of the Guardsman",hand_seals:"10-5-3-4-8-1"},
                            {id:65,name:"Hyper Hydron Osmosis Beam",hand_seals:"7-3-9-2-11-12"},
                            {id:66,name:"Calm Waters",hand_seals:"3-5-10-4-1-2"},
                            {id:67,name:"Death Waltz",hand_seals:"5-4-8-12-2-1"},
                            {id:68,name:"Spinning Tempest",hand_seals:"8-3-5-1-4"},
                            {id:69,name:"Eye of the Storm",hand_seals:"11-7-12-9-1"},
                            {id:70,name:"Festival of Light",hand_seals:"4-8-11-3-2-1"},
                            {id:71,name:"Burden of the Pharaoh",hand_seals:"3-2-7-10-1-4"},
                            {id:74,name:"Exploding Kunai Seal",hand_seals:"4-3-11-8-7-1"},
                            {id:75,name:"100 Shuriken Ambush",hand_seals:"12-1-4-6-7-3"},
                            {id:89,name:"Earth Devastation  ",hand_seals:"2-7-3-12"}
                        ],
                        genjutsu: [
                            {id:76,name:"Purple Demon Assault",hand_seals:"10-12-6-3-7-1"},
                            {id:78,name:"Needle Storm Illusion",hand_seals:"1-10-3-4-2-5"},
                            {id:79,name:"Nerve Destruction",hand_seals:"4-1-3-10-12-6"},
                            {id:80,name:"Drowning Torrent",hand_seals:"8-4-1-2-5-6"},
                            {id:85,name:"Pale Odyssey",hand_seals:"2-3-1-5-8-9"},
                            {id:86,name:"Shinobi&#039;s Tragedy",hand_seals:"8-7-9-1-3-2"}
                        ],
                        taijutsu: [
                            {id:72,name:"Ascending Hurricane Kick",hand_seals:"100-7"},
                            {id:73,name:"Stone Henge Assault",hand_seals:"100-85"},
                            {id:77,name:"Earthbreaker Assault",hand_seals:"127-100"},
                            {id:81,name:"Afterimage Flash",hand_seals:"100-28"},
                            {id:82,name:"Phantom Palm",hand_seals:"100-41"},
                            {id:83,name:"Ravaging Cyclone",hand_seals:"100-42"},
                            {id:84,name:"Endless Barrage",hand_seals:"100-19"},
                            {id:88,name:"Illusionary Shadow",hand_seals:"100-30"}
                        ]
                    }
                }
            },
            bloodlines: {
                "None": { name: "None" },
                1:{name:"Shadow Manipulator",jutsu:[{id:0,name:"Shadow Spear",rank:"2",hand_seals:"120",type:"ninjutsu"},{id:1,name:"Devouring Darkness",rank:"3",hand_seals:"121",type:"genjutsu"}]},
                2:{name:"Marionette Maniac",jutsu:[{id:0,name:"Dancing Strings",rank:"2",hand_seals:"15",type:"taijutsu"},{id:1,name:"Circle of Flames",rank:"3",hand_seals:"16",type:"taijutsu"}]},
                3:{name:"Fiendish Whispers",jutsu:[{id:0,name:"Hypnotizing Melody",rank:"2",hand_seals:"12",type:"genjutsu"},{id:1,name:"Last Lullaby",rank:"3",hand_seals:"104",type:"genjutsu"}]},
                4:{name:"Excess Chakra",jutsu:[{id:0,name:"Chakra Battle Gear",rank:"2",hand_seals:"155",type:"ninjutsu"}]},
                5:{name:"Morphing Limbs",jutsu:[{id:0,name:"Ceramic Hammer",rank:"2",hand_seals:"111",type:"taijutsu"}]},
                6:{name:"Desert Wanderer",jutsu:[{id:0,name:"Red Sands",rank:"2",hand_seals:"112",type:"ninjutsu"}]},
                7:{name:"Electric Beast",jutsu:[{id:0,name:"Static Discharge",rank:"2",hand_seals:"113",type:"ninjutsu"}]},
                8:{name:"Rejuvenating Waters",jutsu:[{id:0,name:"Tainted Spring",rank:"2",hand_seals:"114",type:"genjutsu"}]},
                9:{name:"Fiery Passion",jutsu:[{id:0,name:"Furious Hurricane",rank:"2",hand_seals:"17",type:"taijutsu"}]},
                10:{name:"Sensory Destroyer",jutsu:[{id:0,name:"Internal Shock",rank:"2",hand_seals:"18",type:"genjutsu"}]},
                11:{name:"Earthly Minerals",jutsu:[{id:0,name:"Gravel Pit",rank:"2",hand_seals:"19",type:"ninjutsu"}]},
                12:{name:"Beast Tamer",jutsu:[{id:0,name:"Beastly Strike",rank:"2",hand_seals:"122",type:"taijutsu"},{id:1,name:"Menacing Alpha",rank:"3",hand_seals:"123",type:"taijutsu"}]},
                13:{name:"Ritual Winds",jutsu:[{id:0,name:"Hypnotic Dance",rank:"2",hand_seals:"4.3",type:"genjutsu"}]},
                14:{name:"Liquid of Power",jutsu:[{id:0,name:"Refreshing Waters",rank:"2",hand_seals:"27",type:"taijutsu"}]},
                15:{name:"Detonating Masterpiece",jutsu:[{id:0,name:"Sneaking Serpent",rank:"2",hand_seals:"30",type:"ninjutsu"},{id:1,name:"Scorched Landscape",rank:"3",hand_seals:"31",type:"ninjutsu"}]},
                16:{name:"Demonic Weaponry",jutsu:[{id:0,name:"Psychotic Slash",rank:"2",hand_seals:"200",type:"taijutsu"},{id:1,name:"Threading needle",rank:"3",hand_seals:"207",type:"taijutsu"},{id:2,name:"Rebirth of blood",rank:"4",hand_seals:"208",type:"taijutsu"}]},
                17:{name:"Death&#039;s Gaze",jutsu:[{id:0,name:"Luminescent Landscape",rank:"2",hand_seals:"201",type:"genjutsu"},{id:1,name:"Dimensional Gateway",rank:"3",hand_seals:"209",type:"genjutsu"},{id:2,name:"Inescapable Fate",rank:"4",hand_seals:"210",type:"genjutsu"}]},
                18:{name:"Weeping Skies",jutsu:[{id:0,name:"Supersonic Fist",rank:"2",hand_seals:"202",type:"taijutsu"},{id:1,name:"Trailing Thunder",rank:"3",hand_seals:"205",type:"taijutsu"},{id:2,name:"Reverberating rash",rank:"4",hand_seals:"206",type:"taijutsu"}]},
                19:{name:"Gravitational Law",jutsu:[{id:0,name:"Crushing Vortex",rank:"2",hand_seals:"203",type:"ninjutsu"},{id:1,name:"Gravity Shift",rank:"3",hand_seals:"311",type:"ninjutsu"},{id:2,name:"Fiery Impact",rank:"4",hand_seals:"306",type:"ninjutsu"}]},
                20:{name:"Smoldering Sands",jutsu:[{id:0,name:"Shores of Flames",rank:"2",hand_seals:"204",type:"ninjutsu"},{id:1,name:"Devouring Dunes",rank:"3",hand_seals:"211",type:"ninjutsu"},{id:2,name:"Sand Cyclone",rank:"4",hand_seals:"212",type:"ninjutsu"}]},
                21:{name:"Cursed waters",jutsu:[{id:0,name:"Waiting Abyss",rank:"2",hand_seals:"300",type:"ninjutsu"}]},
                22:{name:"Hidden Weapons",jutsu:[{id:0,name:"Scenery Deception",rank:"2",hand_seals:"301",type:"taijutsu"}]},
                23:{name:"Destructive Rage",jutsu:[{id:0,name:"Burning Hate",rank:"2",hand_seals:"302",type:"taijutsu"}]},
                24:{name:"Tranquil eadow",jutsu:[{id:0,name:"Withering life force",rank:"2",hand_seals:"303",type:"genjutsu"}]},
                25:{name:"Serpent&#039;s Fang",jutsu:[{id:0,name:"Chains of Deception",rank:"2",hand_seals:"304",type:"taijutsu"}]},
                26:{name:"Malevolent Tattoo",jutsu:[{id:0,name:"Peeked Power",rank:"2",hand_seals:"305",type:"ninjutsu"}]},
                27:{name:"Elemental Neutralizer",jutsu:[{id:0,name:"Potent Seal",rank:"2",hand_seals:"307",type:"ninjutsu"}]},
                28:{name:"Heightened Reflexes",jutsu:[{id:0,name:"Timed Blows",rank:"2",hand_seals:"308",type:"taijutsu"}]},
                29:{name:"Sonata of ouls",jutsu:[{id:0,name:"Illusion&#039;s Trick",rank:"2",hand_seals:"309",type:"genjutsu"}]},
                30:{name:"Illusionary Madness",jutsu:[{id:0,name:"Illusionary Madness",rank:"2",hand_seals:"310",type:"genjutsu"}]},
                31:{name:"Kage of Adorableness",jutsu:[{id:0,name:"Banana of Doom",rank:"2",hand_seals:"9000",type:"taijutsu"},{id:1,name:"Happy Rainbow Cannon",rank:"3",hand_seals:"9001",type:"taijutsu"},{id:2,name:"Fountain of Youth",rank:"4",hand_seals:"9002",type:"taijutsu"}]},
                32:{name:"Shattering Glass",jutsu:[{id:0,name:"Shattered Hailstorm",rank:"2",hand_seals:"500",type:"ninjutsu"}]},
                33:{name:"Descendants of Blood",jutsu:[{id:0,name:"Scent of Decay",rank:"2",hand_seals:"501",type:"genjutsu"}]},
                34:{name:"Energy anipulation",jutsu:[{id:0,name:"Energy Egg",rank:"2",hand_seals:"502",type:"ninjutsu"}]},
                35:{name:"Molded Energy",jutsu:[{id:0,name:"Barrage of Lasers",rank:"2",hand_seals:"504",type:"ninjutsu"}]},
                36:{name:"Cavalcade of Souls",jutsu:[{id:0,name:"Stalking Spirits",rank:"2",hand_seals:"503",type:"genjutsu"}]},
                37:{name:"Superconductive Metals",jutsu:[{id:0,name:"Connected Circuit",rank:"2",hand_seals:"505",type:"ninjutsu"},{id:1,name:"Titanium Tomb",rank:"3",hand_seals:"506",type:"ninjutsu"}]},
                38:{name:"Autumn&#039;s Rebirth",jutsu:[{id:0,name:"Fire of evival",rank:"2",hand_seals:"507",type:"ninjutsu"},{id:1,name:"Forest of Renewal",rank:"3",hand_seals:"508",type:"ninjutsu"}]},
                39:{name:"Evoked Inugami",jutsu:[{id:0,name:"Shadow Canines ssault",rank:"2",hand_seals:"516",type:"genjutsu"},{id:1,name:"Ritual of the Inugami",rank:"3",hand_seals:"517",type:"genjutsu"}]},
                40:{name:"Monstrous Transformation",jutsu:[{id:0,name:"Aqua Torpedo",rank:"2",hand_seals:"512",type:"ninjutsu"},{id:1,name:"Devouring Frenzy",rank:"3",hand_seals:"513",type:"ninjutsu"}]},
                41:{name:"Toxic Atmosphere",jutsu:[{id:0,name:"Parasitic organisms",rank:"2",hand_seals:"514",type:"ninjutsu"},{id:1,name:"Neutralized Functions",rank:"3",hand_seals:"515",type:"ninjutsu"}]},
                42:{name:"Somber Requiem",jutsu:[{id:0,name:"Eternal Slumber",rank:"2",hand_seals:"509",type:"genjutsu"},{id:1,name:"Forgotten Ones",rank:"3",hand_seals:"510",type:"genjutsu"},{id:2,name:"Faded Memories",rank:"4",hand_seals:"511",type:"genjutsu"}]},
                43:{name:"Nature&#039;s Calamity",jutsu:[{id:0,name:"Rose Garden",rank:"2",hand_seals:"517",type:"ninjutsu"},{id:1,name:"Devouring Landscape",rank:"3",hand_seals:"518",type:"ninjutsu"},{id:2,name:"Harmonic Balance",rank:"4",hand_seals:"519",type:"ninjutsu"}]},
                44:{name:"Impregnable Defenses",jutsu:[{id:0,name:"Tempered Edge",rank:"2",hand_seals:"520",type:"taijutsu"},{id:1,name:"Enriched Blood",rank:"3",hand_seals:"521",type:"taijutsu"},{id:2,name:"Unbreakable Willpower",rank:"4",hand_seals:"522",type:"taijutsu"}]},
                45:{name:"Frigid Tundra",jutsu:[{id:0,name:"Icicle Shrapnel",rank:"2",hand_seals:"523",type:"ninjutsu"},{id:1,name:"Crippling Cold",rank:"3",hand_seals:"524",type:"ninjutsu"},{id:2,name:"Awakening Storm",rank:"4",hand_seals:"525",type:"ninjutsu"}]},
                46:{name:"Ancient&#039;s Strength",jutsu:[{id:0,name:"Crushing Power",rank:"2",hand_seals:"526",type:"taijutsu"},{id:1,name:"Unfathomable Density",rank:"3",hand_seals:"527",type:"taijutsu"},{id:2,name:"Might of the Gods",rank:"4",hand_seals:"528",type:"taijutsu"}]},
                47:{name:"Eyes of God",jutsu:[{id:0,name:"Molecular Disintegration",rank:"2",hand_seals:"529",type:"ninjutsu"},{id:1,name:"Divine Beasts",rank:"3",hand_seals:"530",type:"ninjutsu"},{id:2,name:"God&#039;s Awakening",rank:"4",hand_seals:"531",type:"ninjutsu"}]},
                49:{name:"Captain&#039;s Boot",jutsu:[{id:0,name:"Getting The Boot",rank:"4",hand_seals:"666",type:"ninjutsu"}]}
            },
            pages: {
                profile: 1,
                inbox: 2,
                chat: 7,
                jutsu: 4,
                gear: 5,
                bloodline: 10,
                members: 6,
                team: 24,
                travel: 11,
                arena: 12,
                training: 13,
                missions: 14,
                spar: 22,
                ramen: 23,
                view_battles: 26,
                shop: 8,
                village_hq: 9,
                clan: 20,
                ancient_market: 21,
                mod_panel: 16,
                admin_panel: 17,
                settings: 3,
                report: 18,
                battle: 19
            }
        };


    function checkLinks() {
        $("a:not(.skip)").each(function () {
            let currentHref = $(this).attr('href');
            if (currentHref && currentHref.indexOf(data.domain) === -1) {
                let newAction = data.domain + currentHref;
                $(this).attr('target', 'game');
                $(this).attr('href', newAction);
            }
        });

        $("form").each(function () {
            let currentAction = $(this).attr('action');
            if (currentAction && currentAction.indexOf(data.domain) === -1) {
                let newAction = data.domain + currentAction;
                $(this).attr('target', 'game');
                $(this).attr('action', newAction);
            }
        });

    }

    let dom = {
        template: $("#template"),
        select: {
            layout: $("#layout"),
            bloodline: $("#bloodline"),
            rank: $("#rank"),
            train_type: $("#train_type"),
            training_data: $("#training_data"),
            users: $(".loadUsers"),
            battle_type: $("#battle_type"),
            jutsu_type: $("#jutsu_type"),
            fetch_jutsu: $(".fetchJutsu"),
            weapon: $("#weapons"),
            regen_timer: $("#regen")
        },
        clickable: {
            ai: $(".ai"),
            attack_user: $("#add_user"),
            titles: $("h3:not(.skip)"),
            delete_user: $("#delete_user"),
            add_jutsu: $("#add_jutsu_slot"),
            train: $("#train_form")
        },
        content: {
            jutsu_slots: $("#jutsu_slots"),
            bloodline_jutsu: $("#bl_jutsu"),
            regen_timer: $(".regen")
        }
    };

    let player = {
        layout: 'shadow_ribbon',
        bloodline: null,
        rank: 1,
        jutsu_slots: [],
        battle_type: data.pages.arena,
        train_type: "Short",
        training_data: "ninjutsu",
        attack_users: [],
        last_user: "None",
        weapon: "None",
        jutsu_type: "all",
        regen: "On",
        addAttackUser: function(userid, username) {
            this.attack_users.push({ userId: userid, userName: username });
            this.persistData();
        },
        removeAttackUser: function(userId) {
            let newUsers = [];
            for(let user of this.attack_users) {
                if(user.userId === userId)
                    continue;
                newUsers.push({ userId: user.userId, userName: user.userName });
            }
            this.attack_users = newUsers;
            this.persistData();
        },
        addJutsuSlot: function(type) {
            this.jutsu_slots.push({ jutsu: data.ranks[this.rank].jutsu[type][0].id, offense: type });
            this.persistData();
        },
        updateMenu: function() {

            // set template data on load
            dom.template.attr("href", `assets/css/${this.layout}.css`);

            // set default value on page load
            dom.select.training_data.attr('name', data.training.methods.skill.includes(this.training_data) ? 'skill' : 'attributes');

            // Load the weapon if it is stored
            if(this.weapon !== 'None')
                dom.select.weapon.val(this.weapon);

            // Hide stuff their rank can't normally see.
            $("[data-rank]").each(function() { player.rank < $(this).data('rank') ? $(this).hide() : $(this).show() });

            dom.content.regen_timer[this.regen === "Off" ? 'hide' : 'show']();

            // Populate the AI
            dom.clickable.ai.html("");
            for (let ai of data.ai[this.rank])
                dom.clickable.ai.append(`<a href='?id=${data.pages.arena}&fight=${ai.id}'>${ai.name} (&yen;${ai.money})</a><br />`);

            // set the form action attribute for training
            dom.clickable.train.attr('action', `?id=${data.pages.training}`);

            // If the user has added any attack-able users
            if(this.attack_users.length > 0)
            {
                dom.select.users.empty();
                for(let user of this.attack_users)
                    dom.select.users.append(`<option value='${user.userId}'>${user.userName}</option>`);
            }
            else dom.select.users.html(`<option>No Users Added</option>`);

            // If the user has created any jutsu slots, populate them
            if(this.jutsu_slots.length > 0) {
                dom.content.jutsu_slots.html("");
                for(let jutsu of this.jutsu_slots) {
                    let combat_form = `
                        <form action="?id=${this.battle_type}" method="POST">
                            <input type="hidden" class="jutsuType" name="jutsu_type" value="${jutsu.offense}">
                            <input type="hidden" class="weaponID" name="weapon_id" value="${this.weapon}">
                            <input type="hidden" class="jutsuID" name="jutsu_id" value="${jutsu.jutsu}">
                            <table>
                                <tr>
                                    <td style="width:70%;"><select name="hand_seals" class="fetchJutsu" data-offense="${jutsu.offense}"></select></td>
                                    <td style="width:20%;"><input class="use_jutsu" type="submit" name="attack" value="Use"></td>
                                    <td style="width:10%;"><button class="delete_jutsu_slot">-</button></td>
                                </tr>
                            </table>
                        </form>
                    `;
                    dom.content.jutsu_slots.append(combat_form);
                }
            }
            else dom.content.jutsu_slots.html("");

            // If the user has a bloodline, populate the bloodline jutsu
            if(this.bloodline && this.bloodline !== 'None') {
                dom.content.bloodline_jutsu.html("");
                for(let jutsu of data.bloodlines[this.bloodline].jutsu) {
                    let combat_form = `
                            <form action="?id=${this.battle_type}" method="POST">
                                <input type="hidden" id="jutsuType" name="jutsu_type" value="bloodline_jutsu">
                                <input type="hidden" id="jutsuID" name="jutsu_id" value="${jutsu.id}">
                                <input id="submitbtn" type="submit" name="attack" value="${jutsu.name}">
                            </form>
                    `;
                    dom.content.bloodline_jutsu.append(combat_form);
                }
            }
            else dom.content.bloodline_jutsu.html("");

            dom.select.fetch_jutsu = $(".fetchJutsu");
            dom.clickable.delete_jutsu = $(".delete_jutsu_slot");

            // on delete, remove the jutsu slot
            dom.clickable.delete_jutsu.click(function() {
                let slot = dom.clickable.delete_jutsu.index(this);
                player.jutsu_slots.splice(slot, 1);
                player.persistData();
                dom.clickable.delete_jutsu = $(".delete_jutsu_slot");
            });

            // on change, update the jutsu slot
            dom.select.fetch_jutsu.change(function() {
                let slot = dom.select.fetch_jutsu.index(this);
                player.jutsu_slots[slot] = { jutsu: $(this).find(":selected").data('jid'), offense: $(this).find(":selected").data('type')};
                player.persistData();
            });

            // set the weapon
            $(".weaponID").val(this.weapon);

            // Load the jutsu that the user has stored
            dom.select.fetch_jutsu.each(function(i) {
                $(this).html("");
                let offense = $(this).data('offense');
                let jutsus = [];
                for(let [id, rankInfo] of Object.entries(data.ranks))
                    if(id <= player.rank)
                        jutsus = jutsus.concat(rankInfo.jutsu[offense]);

                for(let jutsu of jutsus) {
                    let option = $("<option />").attr("data-jid", jutsu.id).attr('data-type', offense).val(jutsu.hand_seals).text(jutsu.name);
                    if(option.data('jid') === player.jutsu_slots[i].jutsu)
                        option.attr('selected', true);
                    $(this).append(option);
                }
            });

            checkLinks();
        },
        loadData: function() {
            let playerData = JSON.parse(localStorage.getItem('player'));
            this.regen = playerData.regen;
            this.layout = playerData.layout;
            this.bloodline = playerData.bloodline;
            this.rank = playerData.rank;
            this.battle_type = playerData.battle_type;
            this.training_data = playerData.training_data;
            this.train_type = playerData.train_type;
            this.attack_users = playerData.attack_users;
            this.jutsu_type = playerData.jutsu_type;
            this.jutsu_slots = playerData.jutsu_slots;
            this.weapon = playerData.weapon;
            this.updateMenu();
        },
        persistData: function(updateInfo) {
            if(updateInfo)
                for(const [key, value] of Object.entries(updateInfo))
                    this[key] = value;
            localStorage.setItem('player', JSON.stringify(this));
            this.loadData();
        }
    };

    // Load persistent user data
    (!localStorage.getItem('player')) ? player.persistData() : player.loadData();


    // Actual menu configuration

    // dropdowns
    dom.clickable.titles.click(function() { $(this).next().slideToggle(); });

    // Update the player on select changes
    function onConfigUpdate(evt) {
        let target = $(evt.target);
        player[target.attr('id')] = target.val();
        player.persistData();
    }

    // Iterate over an array such that ["Name" => "Name"]
    function populateArray(collection, attribute) {
        let html = "";
        for (let item of collection)
            html += `<option value='${item}' ${attribute === item ? 'selected' : ''}>${item.replace("_", " ")}</option>`;
        return html;
    }

    // 'Can't iterate over an object' ==> But we can iterate over an array of Objects such that ["Key" => "Value"]
    function populateObject(collection, attribute) {
        let html = "";
        for(const [key, value] of Object.entries(collection))
            html += `<option value='${key}' ${attribute === key ? 'selected' : ''}>${value.name.replace("_", " ")}</option>`;
        return html;
    }

    // Does the same as above, however, takes a dom element & determines which method to run
    function populate(element, collection, attribute) {
        element.html(Array.isArray(collection) ? populateArray(collection, attribute) : populateObject(collection, attribute));
        element.on('change', onConfigUpdate);
    }


});
