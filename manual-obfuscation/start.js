var cgka=['Cannot\x20wipe\x20user\x20that\x20does\x20not\x20exist!','isInteger','Resident','reply','/database/','Co-Owner','./database/','skipFailed',':infinity:',':small_orange_diamond:','{\x0a\x09\x22data\x22:\x20\x22','base-64','match','Guest','Player\x20discord\x20set','WARNING!\x20You\x20are\x20about\x20to\x20completley\x20wipe\x20**','writeFile','NzUwNDE4NDgzMzcxNzA0NDAx.X06PrA.WkHCy1jbRKhMUDeYCiWixa3ElKg','helpEmbed','prankset','\x20to\x20continue!\x20WARNING!','channel','#AA0000','You\x20need\x20more\x20arguments','rank','skipSuccess','help','476905356723748867','#AAAAAA','Player\x20skip\x20add','message','res','Rebuilding\x20with\x20default\x20data','decode','**\x27s\x20data\x20and\x20rebuild\x20the\x20profile!\x20Type\x20.confirmdel\x20','giveaways','indexOf','encode','roles','keys','del','{\x22version\x22:3,\x22rank\x22:\x22guest\x22,\x22usedskips\x22:0,\x22skipsleft\x22:1,\x22discord\x22:\x22unset\x22,\x22giveaways\x22:[\x22none\x22],\x22developer\x22:0,\x22moderator\x22:0,\x22owner\x22:0,\x22vip\x22:0}','parseCommand','owner','slice','guest','Log','log','751941550933803169','send','guild','developer','length','.json','393543627227267073','{\x0a\x09\x22data\x22:\x22','Reset\x20complete.','discord.js','Hello!\x20I\x27m\x20Chris\x27s\x20Gatekeeper.\x20Type\x20.help\x20for\x20help!','Wipe\x20complete','Player\x20rank\x20set','#FFFF55','replace','playerInfo','Owner','\x22:[','parse','Skip','\x22\x0a}','cache','That\x20user\x20doesn\x27t\x20exist','./embeds.js','Player\x20skip\x20remove','usedskips','pskipremove','skipsleft','moderator','discord','login','Deleting\x20file','pskipadd','forEach','{\x22version\x22:3,\x22rank\x22:\x22guest\x22,\x22usedskips\x22:0,\x22skipsleft\x22:1,\x22discord\x22:\x22unset\x22,\x22giveaways\x22:[\x22none\x22],\x22developer\x22:0,\x22moderator\x22:0,\x22owner\x22:0,\x22vip\x22:0,\x22badge\x22:\x22\x22}','reset','Hello','toLowerCase','ready','hello',':diamond_shape_with_a_dot_inside:','#FFAA00','File\x20deleted','data'];(function(a,b){var c=function(f){while(--f){a['push'](a['shift']());}};c(++b);}(cgka,0xf1));var cgkb=function(a,b){a=a-0x0;var c=cgka[a];return c;};const Discord=require(cgkb('0x0'));const embeds=require(cgkb('0xe'));const base64=require(cgkb('0x2e'));const client=new Discord['Client']();const command=require('./cx5.min.js');const c=command['c'];var fs=require('fs');const core=cgkb('0x3e');const ghostly=cgkb('0x59');function read(a){try{var b=fs['readFileSync'](a);return b;}catch(d){return null;}}function write(a,b){fs[cgkb('0x33')]('./'+a,b,d=>{if(d)return console['log'](d);});}function parseData(a){return JSON[cgkb('0x9')](base64[cgkb('0x44')](a));}function writeField(a,b,d){try{var f=base64['decode'](JSON[cgkb('0x9')](read(a))[cgkb('0x22')]);}catch(l){return null;}console['log'](f);var g='\x22'+b+'\x22:\x22?[a-zA-Z\x5c[\x5c]#0-9]+\x22?';var h=new RegExp(g,'g');var i=f[cgkb('0x2f')](h);var j=f[cgkb('0x47')](i[0x0]);f=f[cgkb('0x5')](i+',','');if(b==cgkb('0x46')){f=f[cgkb('0x4f')](0x0,j)+'\x22'+b+cgkb('0x8')+d+'],'+f[cgkb('0x4f')](j);}else if(Number[cgkb('0x24')](d)){f=f[cgkb('0x4f')](0x0,j)+'\x22'+b+'\x22:'+d+','+f[cgkb('0x4f')](j);}else{f=f['slice'](0x0,j)+'\x22'+b+'\x22:\x22'+d+'\x22,'+f[cgkb('0x4f')](j);}console[cgkb('0x52')](f);var k=base64[cgkb('0x48')](f);write(a,cgkb('0x5a')+k+cgkb('0xb'));return 0x0;}client['on'](cgkb('0x41'),a=>{command[cgkb('0x4d')](a);});c['on'](cgkb('0x3d'),(a,b)=>{console['log']('Help');b[cgkb('0x38')][cgkb('0x54')](embeds[cgkb('0x35')]);});c['on']('log',(a,b)=>{console['log'](cgkb('0x51'));try{var d=require(cgkb('0x29')+a[0x1]['toLowerCase']()+cgkb('0x58'));Object[cgkb('0x4a')](require[cgkb('0xc')])[cgkb('0x18')](function(j){delete require[cgkb('0xc')][j];});var f=parseData(d[cgkb('0x22')]);var g='';var h='';var i='';if(f[cgkb('0x3b')]==='co'){g='Co-Owner';h='#FFFF55';}else if(f[cgkb('0x3b')]==cgkb('0x42')){g=cgkb('0x25');h=cgkb('0x20');}else if(f[cgkb('0x3b')]=='guest'){g=cgkb('0x30');h=cgkb('0x3f');}else if(f['rank']==cgkb('0x4e')){g=cgkb('0x7');h=cgkb('0x39');}if(f[cgkb('0x56')]==0x1){i+=cgkb('0x1f');}if(f[cgkb('0x13')]==0x1){i+=':small_orange_diamond:';}if(f[cgkb('0x4e')]==0x1){i+=':infinity:';}b[cgkb('0x38')][cgkb('0x54')](embeds[cgkb('0x6')](i+'\x20'+a[0x1][cgkb('0x1c')](),g,f[cgkb('0x10')],f['skipsleft'],f['discord'],f[cgkb('0x46')],h));}catch(j){console[cgkb('0x52')](j);write(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+cgkb('0x58'),'{\x0a\x09\x22data\x22:\x20\x22'+base64[cgkb('0x48')](cgkb('0x19'))+'\x22'+'\x0a');var d=require(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+cgkb('0x58'));Object[cgkb('0x4a')](require[cgkb('0xc')])[cgkb('0x18')](function(k){delete require['cache'][k];});var f=parseData(d['data']);var g='';var h='';var i='';if(f[cgkb('0x3b')]==='co'){g=cgkb('0x28');h=cgkb('0x4');}else if(f[cgkb('0x3b')]==cgkb('0x42')){g=cgkb('0x25');h=cgkb('0x20');}else if(f[cgkb('0x3b')]==cgkb('0x50')){g=cgkb('0x30');h=cgkb('0x3f');}else if(f['rank']==cgkb('0x4e')){g=cgkb('0x7');h=cgkb('0x39');}if(f[cgkb('0x56')]==0x1){i+=cgkb('0x1f');}if(f[cgkb('0x13')]==0x1){i+=cgkb('0x2c');}if(f['owner']==0x1){i+=cgkb('0x2b');}b[cgkb('0x38')]['send'](embeds[cgkb('0x6')](i+'\x20'+a[0x1][cgkb('0x1c')](),g,f['usedskips'],f[cgkb('0x12')],f[cgkb('0x14')],f[cgkb('0x46')],h));}});c['on']('skip',(a,b)=>{console[cgkb('0x52')](cgkb('0xa'));var d=require(cgkb('0x29')+a[0x1]+cgkb('0x58'));Object['keys'](require['cache'])[cgkb('0x18')](function(f){delete require[cgkb('0xc')][f];});var e=parseData(d['data']);if(e['skipsleft']>0x0){writeField(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+'.json',cgkb('0x12'),--e[cgkb('0x12')]);writeField(cgkb('0x29')+a[0x1]['toLowerCase']()+cgkb('0x58'),'usedskips',++e['usedskips']);b[cgkb('0x38')][cgkb('0x54')](embeds[cgkb('0x3c')](a[0x1],e[cgkb('0x10')]+0x1,e[cgkb('0x12')]-0x1));}else{b[cgkb('0x38')][cgkb('0x54')](embeds[cgkb('0x2a')](a[0x1],e[cgkb('0x10')],e[cgkb('0x12')]));}});c['on'](cgkb('0x1e'),(a,b)=>{console['log'](cgkb('0x1b'));b[cgkb('0x26')](cgkb('0x1'));});c['on'](cgkb('0x17'),(a,b)=>{console['log'](cgkb('0x40'));var d=require(cgkb('0x29')+a[0x1]+'.json');Object['keys'](require[cgkb('0xc')])[cgkb('0x18')](function(f){delete require['cache'][f];});var e=parseData(d[cgkb('0x22')]);writeField('./database/'+a[0x1]['toLowerCase']()+cgkb('0x58'),cgkb('0x12'),++e[cgkb('0x12')]);});c['on'](cgkb('0x11'),(a,b)=>{console['log']('Player\x20skip\x20remove');var d=require(cgkb('0x29')+a[0x1]+cgkb('0x58'));Object[cgkb('0x4a')](require['cache'])[cgkb('0x18')](function(f){delete require[cgkb('0xc')][f];});var e=parseData(d['data']);writeField(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+cgkb('0x58'),cgkb('0x12'),--e[cgkb('0x12')]);});c['on']('pdiscordset',(a,b)=>{console[cgkb('0x52')](cgkb('0x31'));writeField(cgkb('0x27')+a[0x1]+cgkb('0x58'),cgkb('0x14'),a[0x4]);});c['on'](cgkb('0x36'),(a,b)=>{console['log'](cgkb('0x3'));console[cgkb('0x52')](cgkb('0xf'));var d=require(cgkb('0x29')+a[0x1]+cgkb('0x58'));Object[cgkb('0x4a')](require[cgkb('0xc')])[cgkb('0x18')](function(f){delete require[cgkb('0xc')][f];});var e=parseData(d[cgkb('0x22')]);switch(a[0x4][cgkb('0x1c')]()){case'guest':writeField(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+cgkb('0x58'),'rank','');break;case cgkb('0x42'):writeField(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+cgkb('0x58'),cgkb('0x3b'),'');break;case'co':writeField(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+'.json',cgkb('0x3b'),'');break;}});c['on']('dgar',(a,b)=>{b[cgkb('0x55')]['member'](b['author'])[cgkb('0x49')]['add'](cgkb('0x53'));b['delete']();});c['on'](cgkb('0x1a'),(a,b)=>{try{var d=require(cgkb('0x29')+a[0x1]+cgkb('0x58'));Object['keys'](require['cache'])[cgkb('0x18')](function(g){delete require[cgkb('0xc')][g];});var f=parseData(d[cgkb('0x22')]);b[cgkb('0x26')](cgkb('0x32')+a[0x1]+cgkb('0x45')+a[0x1]+cgkb('0x37'));}catch(g){b['reply'](cgkb('0x23'));console[cgkb('0x52')](g);}});c['on'](cgkb('0x4b'),(a,b)=>{try{var d=require(cgkb('0x29')+a[0x1]+cgkb('0x58'));Object[cgkb('0x4a')](require['cache'])[cgkb('0x18')](function(g){delete require[cgkb('0xc')][g];});var f=parseData(d[cgkb('0x22')]);b[cgkb('0x26')]('Please\x20wait,\x20wiping\x20data');write('./database/'+a[0x1]+cgkb('0x58'),'');b['reply'](cgkb('0x2'));b[cgkb('0x26')](cgkb('0x16'));b[cgkb('0x26')](cgkb('0x21'));b[cgkb('0x26')](cgkb('0x43'));write('./database/'+a[0x1]+'.json',cgkb('0x2d')+base64[cgkb('0x48')](cgkb('0x4c'))+'\x22'+'\x0a}');b[cgkb('0x26')](cgkb('0x5b'));}catch(g){b[cgkb('0x26')]('Cannot\x20wipe\x20user\x20that\x20does\x20not\x20exist!');console[cgkb('0x52')](g);}});c['on']('write',(a,b)=>{if(a[cgkb('0x57')]<0x4)b[cgkb('0x26')](cgkb('0x3a'));for(var d=0x2;d<a[cgkb('0x57')];d+=0x2){if(!isNaN(a[d+0x1])){if(writeField(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+cgkb('0x58'),a[d],+a[d+0x1])==null)b[cgkb('0x26')](cgkb('0xd'));}else{if(writeField(cgkb('0x29')+a[0x1][cgkb('0x1c')]()+'.json',a[d],a[d+0x1])==null)b[cgkb('0x26')](cgkb('0xd'));}}});client['on'](cgkb('0x1d'),()=>{console['log']('Logged\x20in');});client[cgkb('0x15')](cgkb('0x34'));