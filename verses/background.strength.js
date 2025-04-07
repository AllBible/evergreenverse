const strength = [
    {
        "title": "Genesis 15:1",
        "text": "After these things the word of the LORD came unto Abram in a vision, saying, Fear not, Abram: I am thy shield, and thy exceeding great reward."
    },
    {
        "title": "Deuteronomy 31:6",
        "text": "Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee."
    },
    {
        "title": "Deuteronomy 31:8",
        "text": "And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed."
    },
    {
        "title": "Joshua 1:9",
        "text": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."
    },
    {
        "title": "1 Samuel 1:13",
        "text": "Now Hannah, she spake in her heart; only her lips moved, but her voice was not heard: therefore Eli thought she had been drunken."
    },
    {
        "title": "2 Samuel 22:19",
        "text": "They prevented me in the day of my calamity: but the LORD was my stay."
    },
    {
        "title": "2 Samuel 22:31",
        "text": "As for God, his way is perfect; the word of the LORD is tried: he is a buckler to all them that trust in him.tried: or, refined"
    },
    {
        "title": "Psalms 3:5",
        "text": "I laid me down and slept; I awaked; for the LORD sustained me."
    },
    {
        "title": "Psalms 4:8",
        "text": "I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety."
    },
    {
        "title": "Psalms 9:10",
        "text": "And they that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee."
    },
    {
        "title": "Psalms 18:2",
        "text": "The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower.my strength: Heb. my rock"
    },
    {
        "title": "Psalms 18:6",
        "text": "In my distress I called upon the LORD, and cried unto my God: he heard my voice out of his temple, and my cry came before him, even into his ears."
    },
    {
        "title": "Psalms 23:4",
        "text": "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me."
    },
    {
        "title": "Psalms 27:1",
        "text": "A Psalm of David. The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?"
    },
    {
        "title": "Psalms 27:3",
        "text": "Though an host should encamp against me, my heart shall not fear: though war should rise against me, in this will I be confident."
    },
    {
        "title": "Psalms 27:14",
        "text": "Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD."
    },
    {
        "title": "Psalms 28:7",
        "text": "The LORD is my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him."
    },
    {
        "title": "Psalms 29:11",
        "text": "The LORD will give strength unto his people; the LORD will bless his people with peace."
    },
    {
        "title": "Psalms 30:5",
        "text": "For his anger endureth but a moment; in his favour is life: weeping may endure for a night, but joy cometh in the morning.his anger…: Heb. there is but a moment in his angerfor a night: Heb. in the eveningjoy: Heb. singing"
    },
    {
        "title": "Psalms 31:24",
        "text": "Be of good courage, and he shall strengthen your heart, all ye that hope in the LORD."
    },
    {
        "title": "Psalms 32:7",
        "text": "Thou art my hiding place; thou shalt preserve me from trouble; thou shalt compass me about with songs of deliverance. Selah."
    },
    {
        "title": "Psalms 34:4",
        "text": "I sought the LORD, and he heard me, and delivered me from all my fears."
    },
    {
        "title": "Psalms 34:17",
        "text": "The righteous cry, and the LORD heareth, and delivereth them out of all their troubles."
    },
    {
        "title": "Psalms 37:7",
        "text": "Rest in the LORD, and wait patiently for him: fret not thyself because of him who prospereth in his way, because of the man who bringeth wicked devices to pass.Rest in: Heb. Be silent to"
    },
    {
        "title": "Psalms 37:8",
        "text": "Cease from anger, and forsake wrath: fret not thyself in any wise to do evil."
    },
    {
        "title": "Psalms 40:1",
        "text": "To the chief Musician, A Psalm of David. I waited patiently for the LORD; and he inclined unto me, and heard my cry.I waited…: Heb. In waiting I waited"
    },
    {
        "title": "Psalms 42:5",
        "text": "Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God: for I shall yet praise him for the help of his countenance.cast: Heb. bowedpraise: or, give thanksfor the…: or, his presence is salvation"
    },
    {
        "title": "Psalms 42:11",
        "text": "Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God: for I shall yet praise him, who is the health of my countenance, and my God."
    },
    {
        "title": "Psalms 46:1",
        "text": "To the chief Musician for the sons of Korah, A Song upon Alamoth. God is our refuge and strength, a very present help in trouble.for: or, of"
    },
    {
        "title": "Psalms 46:10",
        "text": "Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth."
    },
    {
        "title": "Psalms 49:5",
        "text": "Wherefore should I fear in the days of evil, when the iniquity of my heels shall compass me about?"
    },
    {
        "title": "Psalms 55:22",
        "text": "Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.burden: or, gift"
    },
    {
        "title": "Psalms 56:3",
        "text": "What time I am afraid, I will trust in thee."
    },
    {
        "title": "Psalms 56:4",
        "text": "In God I will praise his word, in God I have put my trust; I will not fear what flesh can do unto me."
    },
    {
        "title": "Psalms 61:2",
        "text": "From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I."
    },
    {
        "title": "Psalms 62:1",
        "text": "To the chief Musician, to Jeduthun, A Psalm of David. Truly my soul waiteth upon God: from him cometh my salvation.Truly: or, Onlywaiteth: Heb. is silent"
    },
    {
        "title": "Psalms 62:2",
        "text": "He only is my rock and my salvation; he is my defence; I shall not be greatly moved.defence: Heb. high place"
    },
    {
        "title": "Psalms 63:6",
        "text": "When I remember thee upon my bed, and meditate on thee in the night watches."
    },
    {
        "title": "Psalms 68:19",
        "text": "Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation. Selah."
    },
    {
        "title": "Psalms 73:26",
        "text": "My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever.strength: Heb. rock"
    },
    {
        "title": "Psalms 86:7",
        "text": "In the day of my trouble I will call upon thee: for thou wilt answer me."
    },
    {
        "title": "Psalms 91:1",
        "text": "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.abide: Heb. lodge"
    },
    {
        "title": "Psalms 91:2",
        "text": "I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust."
    },
    {
        "title": "Psalms 91:4",
        "text": "He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler."
    },
    {
        "title": "Psalms 94:19",
        "text": "In the multitude of my thoughts within me thy comforts delight my soul."
    },
    {
        "title": "Psalms 112:7",
        "text": "He shall not be afraid of evil tidings: his heart is fixed, trusting in the LORD."
    },
    {
        "title": "Psalms 121:1",
        "text": "A Song of degrees. I will lift up mine eyes unto the hills, from whence cometh my help.I will…: or, Shall I lift up mine eyes to the hills? whence should my help come?"
    },
    {
        "title": "Psalms 121:2",
        "text": "My help cometh from the LORD, which made heaven and earth."
    },
    {
        "title": "Psalms 138:3",
        "text": "In the day when I cried thou answeredst me, and strengthenedst me with strength in my soul."
    },
    {
        "title": "Psalms 139:23",
        "text": "Search me, O God, and know my heart: try me, and know my thoughts:"
    },
    {
        "title": "Proverbs 3:5",
        "text": "Trust in the LORD with all thine heart; and lean not unto thine own understanding."
    },
    {
        "title": "Proverbs 3:6",
        "text": "In all thy ways acknowledge him, and he shall direct thy paths."
    },
    {
        "title": "Proverbs 12:25",
        "text": "Heaviness in the heart of man maketh it stoop: but a good word maketh it glad."
    },
    {
        "title": "Proverbs 14:30",
        "text": "A sound heart is the life of the flesh: but envy the rottenness of the bones."
    },
    {
        "title": "Proverbs 15:13",
        "text": "A merry heart maketh a cheerful countenance: but by sorrow of the heart the spirit is broken."
    },
    {
        "title": "Proverbs 16:3",
        "text": "Commit thy works unto the LORD, and thy thoughts shall be established.Commit: Heb. Roll"
    },
    {
        "title": "Proverbs 17:22",
        "text": "A merry heart doeth good like a medicine: but a broken spirit drieth the bones.like: or, to"
    },
    {
        "title": "Proverbs 18:10",
        "text": "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.safe: Heb. set aloft"
    },
    {
        "title": "Proverbs 29:25",
        "text": "The fear of man bringeth a snare: but whoso putteth his trust in the LORD shall be safe.safe: Heb. set on high"
    },
    {
        "title": "Isaiah 12:2",
        "text": "Behold, God is my salvation; I will trust, and not be afraid: for the LORD JEHOVAH is my strength and my song; he also is become my salvation."
    },
    {
        "title": "Isaiah 26:3",
        "text": "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.perfect…: Heb. peace, peacemind: or, thought, or, imagination"
    },
    {
        "title": "Isaiah 26:4",
        "text": "Trust ye in the LORD for ever: for in the LORD JEHOVAH is everlasting strength:everlasting…: Heb. the rock of ages"
    },
    {
        "title": "Isaiah 35:4",
        "text": "Say to them that are of a fearful heart, Be strong, fear not: behold, your God will come with vengeance, even God with a recompence; he will come and save you.fearful: Heb. hasty"
    },
    {
        "title": "Isaiah 40:29",
        "text": "He giveth power to the faint; and to them that have no might he increaseth strength."
    },
    {
        "title": "Isaiah 40:31",
        "text": "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.renew: Heb. change"
    },
    {
        "title": "Isaiah 41:10",
        "text": "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness."
    },
    {
        "title": "Isaiah 41:13",
        "text": "For I the LORD thy God will hold thy right hand, saying unto thee, Fear not; I will help thee."
    },
    {
        "title": "Isaiah 43:1",
        "text": "But now thus saith the LORD that created thee, O Jacob, and he that formed thee, O Israel, Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine."
    },
    {
        "title": "Isaiah 43:2",
        "text": "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee."
    },
    {
        "title": "Isaiah 54:10",
        "text": "For the mountains shall depart, and the hills be removed; but my kindness shall not depart from thee, neither shall the covenant of my peace be removed, saith the LORD that hath mercy on thee."
    },
    {
        "title": "Jeremiah 17:7",
        "text": "Blessed is the man that trusteth in the LORD, and whose hope the LORD is."
    },
    {
        "title": "Jeremiah 17:8",
        "text": "For he shall be as a tree planted by the waters, and that spreadeth out her roots by the river, and shall not see when heat cometh, but her leaf shall be green; and shall not be careful in the year of drought, neither shall cease from yielding fruit.drought: or, restraint"
    },
    {
        "title": "Lamentations 3:57",
        "text": "Thou drewest near in the day that I called upon thee: thou saidst, Fear not."
    },
    {
        "title": "Lamentations 3:58",
        "text": "O Lord, thou hast pleaded the causes of my soul; thou hast redeemed my life."
    },
    {
        "title": "Micah 5:4",
        "text": "And he shall stand and feed in the strength of the LORD, in the majesty of the name of the LORD his God; and they shall abide: for now shall he be great unto the ends of the earth.feed or, rule"
    },
    {
        "title": "Habakkuk 3:19",
        "text": "The LORD God is my strength, and he will make my feet like hinds' feet, and he will make me to walk upon mine high places. To the chief singer on my stringed instruments.stringed…: Heb. Neginoth"
    },
    {
        "title": "Matthew 6:25",
        "text": "Therefore I say unto you, Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment?"
    },
    {
        "title": "Matthew 6:27",
        "text": " Which of you by taking thought can add one cubit unto his stature?"
    },
    {
        "title": "Matthew 6:33",
        "text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."
    },
    {
        "title": "Matthew 6:34",
        "text": "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof."
    },
    {
        "title": "Matthew 11:28",
        "text": "Come unto me, all ye that labour and are heavy laden, and I will give you rest."
    },
    {
        "title": "Matthew 11:29",
        "text": "Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls."
    },
    {
        "title": "Matthew 11:30",
        "text": "For my yoke is easy, and my burden is light."
    },
    {
        "title": "Mark 4:40",
        "text": "And he said unto them, Why are ye so fearful? how is it that ye have no faith?"
    },
    {
        "title": "Luke 12:22",
        "text": "And he said unto his disciples, Therefore I say unto you, Take no thought for your life, what ye shall eat; neither for the body, what ye shall put on."
    },
    {
        "title": "Luke 12:25",
        "text": "And which of you with taking thought can add to his stature one cubit?"
    },
    {
        "title": "Luke 12:26",
        "text": "If ye then be not able to do that thing which is least, why take ye thought for the rest?"
    },
    {
        "title": "John 14:1",
        "text": "Let not your heart be troubled: ye believe in God, believe also in me."
    },
    {
        "title": "John 14:27",
        "text": "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."
    },
    {
        "title": "Romans 8:6",
        "text": "For to be carnally minded is death; but to be spiritually minded is life and peace.to be carnally…: Gr. the minding of the fleshto be spiritually…: Gr. the minding of the Spirit"
    },
    {
        "title": "Romans 8:15",
        "text": "For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father."
    },
    {
        "title": "Romans 8:28",
        "text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose."
    },
    {
        "title": "Romans 8:31",
        "text": "What shall we then say to these things? If God be for us, who can be against us?"
    },
    {
        "title": "Romans 8:38",
        "text": "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come,"
    },
    {
        "title": "Romans 8:39",
        "text": "Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."
    },
    {
        "title": "Philippians 4:6",
        "text": "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God."
    },
    {
        "title": "Philippians 4:7",
        "text": "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."
    },
    {
        "title": "2 Thessalonians 3:16",
        "text": "Now the Lord of peace himself give you peace always by all means. The Lord be with you all."
    },
    {
        "title": "1 Timothy 6:12",
        "text": "Fight the good fight of faith, lay hold on eternal life, whereunto thou art also called, and hast professed a good profession before many witnesses."
    },
    {
        "title": "2 Timothy 1:7",
        "text": "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."
    },
    {
        "title": "Hebrews 13:6",
        "text": "So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me."
    },
    {
        "title": "1 Peter 5:7",
        "text": "Casting all your care upon him; for he careth for you."
    },
    {
        "title": "1 John 4:18",
        "text": "There is no fear in love; but perfect love casteth out fear: because fear hath torment. He that feareth is not made perfect in love."
    },
    {
        "title": "Revelation 1:17",
        "text": "And when I saw him, I fell at his feet as dead. And he laid his right hand upon me, saying unto me, Fear not; I am the first and the last:"
    }
]