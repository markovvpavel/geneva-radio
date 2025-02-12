import { Banner, Song } from "@/types";

const bkt_banners = `https://bitbucket.org/vmuo2htfg1kb/gr-bkt-banners/raw/be65b1a3398c5d92e595c83bb3ff53f3c2490b84`;

export const banners: Banner[] = Array.from({ length: 18 }).map((_, i) => ({
  poster: `${bkt_banners}/posters/banner-${i + 1}.jpg`,
  url: `${bkt_banners}/videos/banner-${i + 1}.mp4`,
}));

const bkt0 = `https://bitbucket.org/vmuo2htfg1kb/gr-bkt-0/raw/337cd33750f73c1d300168b8faa78402be8843e3`;

const bkt1 = `https://bitbucket.org/vmuo2htfg1kb/gr-bkt-1/raw/185f84c640d64a08dd1a0b18be77d3cb4a57ff0b`;

export const songs: Song[] = [
  {
    name: `AJMW - BOAT PARTY`,
    url: `${bkt1}/AJMW%20-%20BOAT%20PARTY.mp3`,
  },
  {
    name: `ASHLEY HENRY - INTROSPECTION`,
    url: `${bkt1}/ASHLEY%20HENRY%20-%20INTROSPECTION.mp3`,
  },
  {
    name: `ASHLEY HENRY - THE WORLD IS YOURS`,
    url: `${bkt1}/ASHLEY%20HENRY%20-%20THE%20WORLD%20IS%20YOURS.mp3`,
  },
  {
    name: `ATJAZZ - ENCHANTMENT`,
    url: `${bkt1}/ATJAZZ%20-%20ENCHANTMENT.mp3`,
  },
  {
    name: `BADBADNOTGOOD - FALL IN LOVE`,
    url: `${bkt1}/BADBADNOTGOOD%20-%20FALL%20IN%20LOVE.mp3`,
  },
  {
    name: `BERLIOZ - DEEP IN IT`,
    url: `${bkt1}/BERLIOZ%20-%20DEEP%20IN%20IT.mp3`,
  },
  {
    name: `BERLIOZ - JAZZ IS FOR ORDINARY PEOPLE`,
    url: `${bkt1}/BERLIOZ%20-%20JAZZ%20IS%20FOR%20ORDINARY%20PEOPLE.mp3`,
  },
  {
    name: `BERLIOZ - JOYCELYN'S DANCE`,
    url: `${bkt1}/BERLIOZ%20-%20JOYCELYN'S%20DANCE.mp3`,
  },
  {
    name: `BERLIOZ - MIRO`,
    url: `${bkt1}/BERLIOZ%20-%20MIRO.mp3`,
  },
  {
    name: `BERLIOZ - ODE TO RAHSAAN`,
    url: `${bkt1}/BERLIOZ%20-%20ODE%20TO%20RAHSAAN.mp3`,
  },
  {
    name: `BERLIOZ - R & R`,
    url: `${bkt1}/BERLIOZ%20-%20R%20%26%20R.mp3`,
  },
  {
    name: `BERLIOZ - SOMETHING WILL HAPPEN`,
    url: `${bkt1}/BERLIOZ%20-%20SOMETHING%20WILL%20HAPPEN.mp3`,
  },
  {
    name: `BILL EVANS - PERSON I KNEW`,
    url: `${bkt1}/BILL%20EVANS%20-%20PERSON%20I%20KNEW.mp3`,
  },
  {
    name: `BILLIE HOLIDAY - CRAZY HE CALLS ME`,
    url: `${bkt1}/BILLIE%20HOLIDAY%20-%20CRAZY%20HE%20CALLS%20ME.mp3`,
  },
  {
    name: `BLENDED BABIES, COYLE GIRELLI, JARED TANKEL - BEAUTIFUL GIRL`,
    url: `${bkt1}/BLENDED%20BABIES%2C%20COYLE%20GIRELLI%2C%20JARED%20TANKEL%20-%20BEAUTIFUL%20GIRL.mp3`,
  },
  {
    name: `BOLDEN. - KEEP ME CLOSE`,
    url: `${bkt1}/BOLDEN.%20-%20KEEP%20ME%20CLOSE.mp3`,
  },
  {
    name: `BOLDEN. - SHUT THOSE THOUGHTS OFF`,
    url: `${bkt1}/BOLDEN.%20-%20SHUT%20THOSE%20THOUGHTS%20OFF.mp3`,
  },
  {
    name: `BOLDEN. - TAKE FOUR`,
    url: `${bkt1}/BOLDEN.%20-%20TAKE%20FOUR.mp3`,
  },
  {
    name: `BOSTON BUN - MISSING YOU`,
    url: `${bkt1}/BOSTON%20BUN%20-%20MISSING%20YOU.mp3`,
  },
  {
    name: `BRAWTHER, NATHAN HAINES - SUNDIALS`,
    url: `${bkt1}/BRAWTHER%2C%20NATHAN%20HAINES%20-%20SUNDIALS.mp3`,
  },
  {
    name: `CHAOS IN THE CBD - 78 TO STANLEY BAY`,
    url: `${bkt1}/CHAOS%20IN%20THE%20CBD%20-%2078%20TO%20STANLEY%20BAY.mp3`,
  },
  {
    name: `CHAOS IN THE CBD, NATHAN HAINES, DAVE KOOR - EMOTIONAL INTELLIGENCE`,
    url: `${bkt1}/CHAOS%20IN%20THE%20CBD%2C%20NATHAN%20HAINES%2C%20DAVE%20KOOR%20-%20EMOTIONAL%20INTELLIGENCE.mp3`,
  },
  {
    name: `CHRIS ISAAK - WICKED GAME`,
    url: `${bkt1}/CHRIS%20ISAAK%20-%20WICKED%20GAME.mp3`,
  },
  {
    name: `CHRISTIAN SCOTT ATUNDE ADJUAH - SO WHAT`,
    url: `${bkt1}/CHRISTIAN%20SCOTT%20ATUNDE%20ADJUAH%20-%20SO%20WHAT.mp3`,
  },
  {
    name: `CLEO SOL - WHEN I'M IN YOUR ARMS`,
    url: `${bkt1}/CLEO%20SOL%20-%20WHEN%20I'M%20IN%20YOUR%20ARMS.mp3`,
  },
  {
    name: `CRWN - WAIT`,
    url: `${bkt1}/CRWN%20-%20WAIT.mp3`,
  },
  {
    name: `DAN KYE - ACTUALLY`,
    url: `${bkt1}/DAN%20KYE%20-%20ACTUALLY.mp3`,
  },
  {
    name: `DIJON - SKIN`,
    url: `${bkt1}/DIJON%20-%20SKIN.mp3`,
  },
  {
    name: `DJ BORING - WINONA`,
    url: `${bkt1}/DJ%20BORING%20-%20WINONA.mp3`,
  },
  {
    name: `DRAKE - HOTLINE BLING`,
    url: `${bkt1}/DRAKE%20-%20HOTLINE%20BLING.mp3`,
  },
  {
    name: `DRAKE - YEBBA’S HEARTBREAK`,
    url: `${bkt1}/DRAKE%20-%20YEBBA%E2%80%99S%20HEARTBREAK.mp3`,
  },
  {
    name: `DUAN WASI - DTPA`,
    url: `${bkt1}/DUAN%20WASI%20-%20DTPA.mp3`,
  },
  {
    name: `DUBLON - EVOLUTION`,
    url: `${bkt1}/DUBLON%20-%20EVOLUTION.mp3`,
  },
  {
    name: `DUBLON - OUTTA HERE`,
    url: `${bkt1}/DUBLON%20-%20OUTTA%20HERE.mp3`,
  },
  {
    name: `DUBLON - OYSTER JAM`,
    url: `${bkt1}/DUBLON%20-%20OYSTER%20JAM.mp3`,
  },
  {
    name: `DUBLON - VICERAL`,
    url: `${bkt1}/DUBLON%20-%20VICERAL.mp3`,
  },
  {
    name: `EARTH BOYS - BK SWING`,
    url: `${bkt1}/EARTH%20BOYS%20-%20BK%20SWING.mp3`,
  },
  {
    name: `ELI ESCOBAR - VISIONS (PURPLE DISCO MACHINE REMIX)`,
    url: `${bkt1}/ELI%20ESCOBAR%20-%20VISIONS%20(PURPLE%20DISCO%20MACHINE%20REMIX).mp3`,
  },
  {
    name: `ELWD - FANTASTIC FANTASTIC ANGEL`,
    url: `${bkt1}/ELWD%20-%20FANTASTIC%20FANTASTIC%20ANGEL.mp3`,
  },
  {
    name: `ELWD - RIBBIT JAM`,
    url: `${bkt1}/ELWD%20-%20RIBBIT%20JAM.mp3`,
  },
  {
    name: `ELWD - SUNRISE 5000`,
    url: `${bkt1}/ELWD%20-%20SUNRISE%205000.mp3`,
  },
  {
    name: `FENG SUAVE - BY THE POOLSIDE`,
    url: `${bkt1}/FENG%20SUAVE%20-%20BY%20THE%20POOLSIDE.mp3`,
  },
  {
    name: `FENG SUAVE - VENUS FLYTRAP`,
    url: `${bkt1}/FENG%20SUAVE%20-%20VENUS%20FLYTRAP.mp3`,
  },
  {
    name: `FKJ - YLANG YLANG`,
    url: `${bkt1}/FKJ%20-%20YLANG%20YLANG.mp3`,
  },
  {
    name: `FLOFILZ - QUINTAL`,
    url: `${bkt1}/FLOFILZ%20-%20QUINTAL.mp3`,
  },
  {
    name: `FRANK OCEAN - CLOSE TO YOU`,
    url: `${bkt1}/FRANK%20OCEAN%20-%20CLOSE%20TO%20YOU.mp3`,
  },
  {
    name: `FRANK OCEAN - MOON RIVER`,
    url: `${bkt1}/FRANK%20OCEAN%20-%20MOON%20RIVER.mp3`,
  },
  {
    name: `FRANK OCEAN - SELF CONTROL`,
    url: `${bkt1}/FRANK%20OCEAN%20-%20SELF%20CONTROL.mp3`,
  },
  {
    name: `FRANK OCEAN - WHITE FERRARI`,
    url: `${bkt1}/FRANK%20OCEAN%20-%20WHITE%20FERRARI.mp3`,
  },
  {
    name: `FRED AGAIN.. - HANNAH`,
    url: `${bkt1}/FRED%20AGAIN..%20-%20HANNAH.mp3`,
  },
  {
    name: `FREEFORM FIVE - PERSPEX SEX (EWAN’S HI-NRG REMIX)`,
    url: `${bkt1}/FREEFORM%20FIVE%20-%20PERSPEX%20SEX%20(EWAN%E2%80%99S%20HI-NRG%20REMIX).mp3`,
  },
  {
    name: `GASTON - FASCINATION`,
    url: `${bkt1}/GASTON%20-%20FASCINATION.mp3`,
  },
  {
    name: `GENE KRUPA - STOMPIN' AT THE SAVOY`,
    url: `${bkt1}/GENE%20KRUPA%20-%20STOMPIN'%20AT%20THE%20SAVOY.mp3`,
  },
  {
    name: `GENE KRUPA - YARDBIRD SUITE`,
    url: `${bkt1}/GENE%20KRUPA%20-%20YARDBIRD%20SUITE.mp3`,
  },
  {
    name: `GIANNI´S HUMBLE - SHOW ME ⧸⧸ SOMETHING`,
    url: `${bkt1}/GIANNI%C2%B4S%20HUMBLE%20-%20SHOW%20ME%20%E2%A7%B8%E2%A7%B8%20SOMETHING.mp3`,
  },
  {
    name: `GIRLS OF THE INTERNET, I AM AN ISLAND - ABOVE`,
    url: `${bkt1}/GIRLS%20OF%20THE%20INTERNET%2C%20I%20AM%20AN%20ISLAND%20-%20ABOVE.mp3`,
  },
  {
    name: `GODBLESSCOMPUTERS - BURNT`,
    url: `${bkt1}/GODBLESSCOMPUTERS%20-%20BURNT.mp3`,
  },
  {
    name: `HORACE SILVER - JUNGLE JUICE`,
    url: `${bkt1}/HORACE%20SILVER%20-%20JUNGLE%20JUICE.mp3`,
  },
  {
    name: `HORACE SILVER - SONG FOR MY FATHER`,
    url: `${bkt1}/HORACE%20SILVER%20-%20SONG%20FOR%20MY%20FATHER.mp3`,
  },
  {
    name: `HOWLING - HOWLING`,
    url: `${bkt1}/HOWLING%20-%20HOWLING.mp3`,
  },
  {
    name: `JACK J - FOOLISH MAN`,
    url: `${bkt1}/JACK%20J%20-%20FOOLISH%20MAN.mp3`,
  },
  {
    name: `JAMES BLAKE - IF THE CAR BESIDE YOU MOVES AHEAD`,
    url: `${bkt1}/JAMES%20BLAKE%20-%20IF%20THE%20CAR%20BESIDE%20YOU%20MOVES%20AHEAD.mp3`,
  },
  {
    name: `JAMES BLAKE, BON IVER - I NEED A FOREST FIRE`,
    url: `${bkt1}/JAMES%20BLAKE%2C%20BON%20IVER%20-%20I%20NEED%20A%20FOREST%20FIRE.mp3`,
  },
  {
    name: `JAZZ COOL GUTS - DREAMS`,
    url: `${bkt1}/JAZZ%20COOL%20GUTS%20-%20DREAMS.mp3`,
  },
  {
    name: `JERRY BURNHAM - IN THE SHADOW OF THE VALLEY`,
    url: `${bkt1}/JERRY%20BURNHAM%20-%20IN%20THE%20SHADOW%20OF%20THE%20VALLEY.mp3`,
  },
  {
    name: `JITWAM - OPENDOORS`,
    url: `${bkt1}/JITWAM%20-%20OPENDOORS.mp3`,
  },
  {
    name: `JOE MCDUPHREY EXPERIENCE - SOLAR WAVES`,
    url: `${bkt1}/JOE%20MCDUPHREY%20EXPERIENCE%20-%20SOLAR%20WAVES.mp3`,
  },
  {
    name: `JUANDO - TELL YOU SOMETHING`,
    url: `${bkt1}/JUANDO%20-%20TELL%20YOU%20SOMETHING.mp3`,
  },
  {
    name: `JUSTICE DER - DON'T KILL MY VIBE`,
    url: `${bkt1}/JUSTICE%20DER%20-%20DON'T%20KILL%20MY%20VIBE.mp3`,
  },
  {
    name: `KANYE WEST - GHOST TOWN`,
    url: `${bkt1}/KANYE%20WEST%20-%20GHOST%20TOWN.mp3`,
  },
  {
    name: `KANYE WEST - I WONDER`,
    url: `${bkt1}/KANYE%20WEST%20-%20I%20WONDER.mp3`,
  },
  {
    name: `KANYE WEST - MOON`,
    url: `${bkt1}/KANYE%20WEST%20-%20MOON.mp3`,
  },
  {
    name: `KANYE WEST - NO CHILD LEFT BEHIND`,
    url: `${bkt1}/KANYE%20WEST%20-%20NO%20CHILD%20LEFT%20BEHIND.mp3`,
  },
  {
    name: `KANYE WEST - WOLVES`,
    url: `${bkt1}/KANYE%20WEST%20-%20WOLVES.mp3`,
  },
  {
    name: `KANYE WEST, BON IVER - LOST IN THE WORLD`,
    url: `${bkt1}/KANYE%20WEST%2C%20BON%20IVER%20-%20LOST%20IN%20THE%20WORLD.mp3`,
  },
  {
    name: `KANYE WEST, PAUL MCCARTNEY - ONLY ONE`,
    url: `${bkt1}/KANYE%20WEST%2C%20PAUL%20MCCARTNEY%20-%20ONLY%20ONE.mp3`,
  },
  {
    name: `KAYTRAMINÉ - SOSSAUP`,
    url: `${bkt1}/KAYTRAMIN%C3%89%20-%20SOSSAUP.mp3`,
  },
  {
    name: `KAYTRANADA - TASTE`,
    url: `${bkt1}/KAYTRANADA%20-%20TASTE.mp3`,
  },
  {
    name: `KAYTRANADA, MASEGO - NEED IT`,
    url: `${bkt1}/KAYTRANADA%2C%20MASEGO%20-%20NEED%20IT.mp3`,
  },
  {
    name: `KAYTRANADA, SHAY LIA - CHANCES`,
    url: `${bkt1}/KAYTRANADA%2C%20SHAY%20LIA%20-%20CHANCES.mp3`,
  },
  {
    name: `KAYTRANADA, SIR - GO DJ`,
    url: `${bkt1}/KAYTRANADA%2C%20SIR%20-%20GO%20DJ.mp3`,
  },
  {
    name: `KEY TRONICS ENSEMBLE - ANAMARIA`,
    url: `${bkt1}/KEY%20TRONICS%20ENSEMBLE%20-%20ANAMARIA.mp3`,
  },
  {
    name: `KLANGSTOF - EVEREST`,
    url: `${bkt1}/KLANGSTOF%20-%20EVEREST.mp3`,
  },
  {
    name: `LOURE - KEEP IT REAL`,
    url: `${bkt1}/LOURE%20-%20KEEP%20IT%20REAL.mp3`,
  },
  {
    name: `MAGNETIC FAMILY - HAZE`,
    url: `${bkt1}/MAGNETIC%20FAMILY%20-%20HAZE.mp3`,
  },
  {
    name: `MILAN93 - PIEBALD`,
    url: `${bkt1}/MILAN93%20-%20PIEBALD.mp3`,
  },
  {
    name: `MILES DAVIS - SO WHAT`,
    url: `${bkt1}/MILES%20DAVIS%20-%20SO%20WHAT.mp3`,
  },
  {
    name: "MILKY WAY - THEME FROM `A SUMMER PLACE`",
    url: `${bkt1}/MILKY%20WAY%20-%20THEME%20FROM%20%22A%20SUMMER%20PLACE%22.mp3`,
  },
  {
    name: `MKGEE - ALESIS`,
    url: `${bkt1}/MKGEE%20-%20ALESIS.mp3`,
  },
  {
    name: `MR. FINGERS - SANDS OF ARUBA`,
    url: `${bkt1}/MR.%20FINGERS%20-%20SANDS%20OF%20ARUBA.mp3`,
  },
  {
    name: `MUSIQ - JUST FRIENDS`,
    url: `${bkt1}/MUSIQ%20-%20JUST%20FRIENDS.mp3`,
  },
  {
    name: `MYKE BOGAN - JAWBREAKER`,
    url: `${bkt1}/MYKE%20BOGAN%20-%20JAWBREAKER.mp3`,
  },
  {
    name: `OKVSHO - BETWEEN US`,
    url: `${bkt1}/OKVSHO%20-%20BETWEEN%20US.mp3`,
  },
  {
    name: `OKVSHO - ELYJAH SLAPS THE SPACE`,
    url: `${bkt1}/OKVSHO%20-%20ELYJAH%20SLAPS%20THE%20SPACE.mp3`,
  },
  {
    name: `OKVSHO - RASHEED`,
    url: `${bkt1}/OKVSHO%20-%20RASHEED.mp3`,
  },
  {
    name: `OSCAR JEROME - NO NEED (EXTENDED MIX)`,
    url: `${bkt1}/OSCAR%20JEROME%20-%20NO%20NEED%20(EXTENDED%20MIX).mp3`,
  },
  {
    name: `OSCAR JEROME - WHERE ARE YOUR BRANCHES (WHERE IS YOUR FRUIT)`,
    url: `${bkt1}/OSCAR%20JEROME%20-%20WHERE%20ARE%20YOUR%20BRANCHES%20(WHERE%20IS%20YOUR%20FRUIT).mp3`,
  },
  {
    name: `PEDRO MIZUTANI - CHUVA DE VERÃO (FLOFILZ REMIX)`,
    url: `${bkt1}/PEDRO%20MIZUTANI%20-%20CHUVA%20DE%20VER%C3%83O%20(FLOFILZ%20REMIX).mp3`,
  },
  {
    name: `PEJZAŻ - BLASK (ORIGINAL MIX)`,
    url: `${bkt1}/PEJZA%C5%BB%20-%20BLASK%20(ORIGINAL%20MIX).mp3`,
  },
  {
    name: `PIERO PICCIONI - BLACK FLOWER`,
    url: `${bkt1}/PIERO%20PICCIONI%20-%20BLACK%20FLOWER.mp3`,
  },
  {
    name: `POOL BOY - CLOSED FOR RENOVATIONS`,
    url: `${bkt1}/POOL%20BOY%20-%20CLOSED%20FOR%20RENOVATIONS.mp3`,
  },
  {
    name: `REDEYES - ALL BLUES (ORIGINAL MIX)`,
    url: `${bkt1}/REDEYES%20-%20ALL%20BLUES%20(ORIGINAL%20MIX).mp3`,
  },
  {
    name: `ROBERT GLASPER - SO BEAUTIFUL`,
    url: `${bkt1}/ROBERT%20GLASPER%20-%20SO%20BEAUTIFUL.mp3`,
  },
  {
    name: `ROY HAYNES QUARTET - SNAP CRACKLE (REMASTERED 2015)`,
    url: `${bkt1}/ROY%20HAYNES%20QUARTET%20-%20SNAP%20CRACKLE%20(REMASTERED%202015).mp3`,
  },
  {
    name: `RY X - SHORTLINE`,
    url: `${bkt1}/RY%20X%20-%20SHORTLINE.mp3`,
  },
  {
    name: `SADE - CHERISH THE DAY`,
    url: `${bkt1}/SADE%20-%20CHERISH%20THE%20DAY.mp3`,
  },
  {
    name: `SADE - IS IT A CRIME`,
    url: `${bkt1}/SADE%20-%20IS%20IT%20A%20CRIME.mp3`,
  },
  {
    name: `SADE - KISS OF LIFE`,
    url: `${bkt1}/SADE%20-%20KISS%20OF%20LIFE.mp3`,
  },
  {
    name: `SADE - LIKE A TATTOO`,
    url: `${bkt1}/SADE%20-%20LIKE%20A%20TATTOO.mp3`,
  },
  {
    name: `SERAPHINE NOIR - AGAIN`,
    url: `${bkt1}/SERAPHINE%20NOIR%20-%20AGAIN.mp3`,
  },
  {
    name: `SHAOLIN COWBOY, MANON - RÉVEILLER`,
    url: `${bkt1}/SHAOLIN%20COWBOY%2C%20MANON%20-%20R%C3%89VEILLER.mp3`,
  },
  {
    name: `SHLOHMO - BIG FEELINGS`,
    url: `${bkt1}/SHLOHMO%20-%20BIG%20FEELINGS.mp3`,
  },
  {
    name: `SIMON JEFFERIS - AMSTERDAM IN THE SPRING`,
    url: `${bkt1}/SIMON%20JEFFERIS%20-%20AMSTERDAM%20IN%20THE%20SPRING.mp3`,
  },
  {
    name: `SIMON JEFFERIS, NATTY REEVES - BRIXTON STRUT`,
    url: `${bkt1}/SIMON%20JEFFERIS%2C%20NATTY%20REEVES%20-%20BRIXTON%20STRUT.mp3`,
  },
  {
    name: `SVEN WEGNER - ECHOES`,
    url: `${bkt1}/SVEN%20WEGNER%20-%20ECHOES.mp3`,
  },
  {
    name: `SVEN WEGNER - LATE DRINKS`,
    url: `${bkt1}/SVEN%20WEGNER%20-%20LATE%20DRINKS.mp3`,
  },
  {
    name: `TAKUYA KURODA - EVERYBODY LOVES THE SUNSHINE`,
    url: `${bkt1}/TAKUYA%20KURODA%20-%20EVERYBODY%20LOVES%20THE%20SUNSHINE.mp3`,
  },
  {
    name: `TASH SULTANA - ELECTRIC FEEL`,
    url: `${bkt1}/TASH%20SULTANA%20-%20ELECTRIC%20FEEL.mp3`,
  },
  {
    name: `TEUTEU - TESS`,
    url: `${bkt1}/TEUTEU%20-%20TESS.mp3`,
  },
  {
    name: `THE INTERNET - IT GETS BETTER (WITH TIME)`,
    url: `${bkt1}/THE%20INTERNET%20-%20IT%20GETS%20BETTER%20(WITH%20TIME).mp3`,
  },
  {
    name: `THE PONDEROSA TWINS PLUS ONE - BOUND`,
    url: `${bkt1}/THE%20PONDEROSA%20TWINS%20PLUS%20ONE%20-%20BOUND.mp3`,
  },
  {
    name: `THE SUNDROP GARDEN - OMW`,
    url: `${bkt1}/THE%20SUNDROP%20GARDEN%20-%20OMW.mp3`,
  },
  {
    name: `THOMAS LILLEØRE - THE WAY YOU LOOK TONIGHT`,
    url: `${bkt1}/THOMAS%20LILLE%C3%98RE%20-%20THE%20WAY%20YOU%20LOOK%20TONIGHT.mp3`,
  },
  {
    name: `TIGA - LOVE DON'T DANCE HERE ANYMORE`,
    url: `${bkt1}/TIGA%20-%20LOVE%20DON'T%20DANCE%20HERE%20ANYMORE.mp3`,
  },
  {
    name: `TIGA - YOU GONNA WANT ME`,
    url: `${bkt1}/TIGA%20-%20YOU%20GONNA%20WANT%20ME.mp3`,
  },
  {
    name: `TOM MISCH - GYPSY WOMAN`,
    url: `${bkt1}/TOM%20MISCH%20-%20GYPSY%20WOMAN.mp3`,
  },
  {
    name: `TOUR-MAUBOURG - FLOATING ON SILENCE`,
    url: `${bkt1}/TOUR-MAUBOURG%20-%20FLOATING%20ON%20SILENCE.mp3`,
  },
  {
    name: `TYCHO - A WALK`,
    url: `${bkt1}/TYCHO%20-%20A%20WALK.mp3`,
  },
  {
    name: `TYLER THE CREATOR - EARFQUAKE`,
    url: `${bkt1}/TYLER%20THE%20CREATOR%20-%20EARFQUAKE.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - ARE WE STILL FRIENDS?`,
    url: `${bkt1}/TYLER%2C%20THE%20CREATOR%20-%20ARE%20WE%20STILL%20FRIENDS%3F.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - BEST INTEREST`,
    url: `${bkt1}/TYLER%2C%20THE%20CREATOR%20-%20BEST%20INTEREST.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - GLITTER`,
    url: `${bkt1}/TYLER%2C%20THE%20CREATOR%20-%20GLITTER.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - RUNNING OUT OF TIME`,
    url: `${bkt1}/TYLER%2C%20THE%20CREATOR%20-%20RUNNING%20OUT%20OF%20TIME.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - SEE YOU AGAIN`,
    url: `${bkt1}/TYLER%2C%20THE%20CREATOR%20-%20SEE%20YOU%20AGAIN.mp3`,
  },
  {
    name: `WAAN - OPEN`,
    url: `${bkt1}/WAAN%20-%20OPEN.mp3`,
  },
  {
    name: `YESTERDAYS NEW QUINTET - BROKEN DREAMS`,
    url: `${bkt1}/YESTERDAYS%20NEW%20QUINTET%20-%20BROKEN%20DREAMS.mp3`,
  },
  {
    name: `YKCHALLE - FEELINGS GONE`,
    url: `${bkt1}/YKCHALLE%20-%20FEELINGS%20GONE.mp3`,
  },
  {
    name: `YUSSEF DAYES - CHASING THE DRUM`,
    url: `${bkt1}/YUSSEF%20DAYES%20-%20CHASING%20THE%20DRUM.mp3`,
  },
  {
    name: `YUSSEF DAYES - FOR MY LADIES`,
    url: `${bkt1}/YUSSEF%20DAYES%20-%20FOR%20MY%20LADIES.mp3`,
  },
  {
    name: `セロニアスコルトレーン - FADES EM ALL`,
    url: `${bkt1}/%E3%82%BB%E3%83%AD%E3%83%8B%E3%82%A2%E3%82%B9%E3%82%B3%E3%83%AB%E3%83%88%E3%83%AC%E3%83%BC%E3%83%B3%20-%20FADES%20EM%20ALL.mp3`,
  },
  {
    name: `稲垣次郎 - ブリーズ`,
    url: `${bkt1}/%E7%A8%B2%E5%9E%A3%E6%AC%A1%E9%83%8E%20-%20%E3%83%96%E3%83%AA%E3%83%BC%E3%82%BA.mp3`,
  },

  {
    name: `A$AP ROCKY - L$D`,
    url: `${bkt0}/A%24AP%20ROCKY%20-%20L%24D.mp3`,
  },
  {
    name: `AMON TOBIN - BRIDGE`,
    url: `${bkt0}/AMON%20TOBIN%20-%20BRIDGE.mp3`,
  },
  {
    name: `ANDY WILLIAMS - IT'S THE MOST WONDERFUL TIME OF THE YEAR`,
    url: `${bkt0}/ANDY%20WILLIAMS%20-%20IT'S%20THE%20MOST%20WONDERFUL%20TIME%20OF%20THE%20YEAR.mp3`,
  },
  {
    name: `ANDY WILLIAMS - WHITE CHRISTMAS`,
    url: `${bkt0}/ANDY%20WILLIAMS%20-%20WHITE%20CHRISTMAS.mp3`,
  },
  {
    name: `ASTRUD GILBERTO - THE SHADOW OF YOUR SMILE`,
    url: `${bkt0}/ASTRUD%20GILBERTO%20-%20THE%20SHADOW%20OF%20YOUR%20SMILE.mp3`,
  },
  {
    name: `BARBRA STREISAND - YOU MUST BELIEVE IN SPRING`,
    url: `${bkt0}/BARBRA%20STREISAND%20-%20YOU%20MUST%20BELIEVE%20IN%20SPRING.mp3`,
  },
  {
    name: `BERNARD HERRMANN - A RELUCTANT HERO`,
    url: `${bkt0}/BERNARD%20HERRMANN%20-%20A%20RELUCTANT%20HERO%20_%20BETSY%20_%20END%20CREDITS.mp3`,
  },
  {
    name: `BILL EVANS - BLUE IN GREEN`,
    url: `${bkt0}/BILL%20EVANS%20-%20BLUE%20IN%20GREEN.mp3`,
  },
  {
    name: `BILL EVANS - LIKE SOMEONE IN LOVE`,
    url: `${bkt0}/BILL%20EVANS%20-%20LIKE%20SOMEONE%20IN%20LOVE.mp3`,
  },
  {
    name: `BILL EVANS - MY FOOLISH HEART`,
    url: `${bkt0}/BILL%20EVANS%20-%20MY%20FOOLISH%20HEART.mp3`,
  },
  {
    name: `BILL EVANS - THE PEACOCKS`,
    url: `${bkt0}/BILL%20EVANS%20-%20THE%20PEACOCKS.mp3`,
  },
  {
    name: `BILL EVANS - TIME REMEMBERED`,
    url: `${bkt0}/BILL%20EVANS%20-%20TIME%20REMEMBERED.mp3`,
  },
  {
    name: `BILL EVANS - WALTZ FOR DEBBY`,
    url: `${bkt0}/BILL%20EVANS%20-%20WALTZ%20FOR%20DEBBY.mp3`,
  },
  {
    name: `BILL EVANS - WE WILL MEET AGAIN`,
    url: `${bkt0}/BILL%20EVANS%20-%20WE%20WILL%20MEET%20AGAIN.mp3`,
  },
  {
    name: `BILL EVANS - WHAT ARE YOU DOING THE REST OF YOUR LIFE`,
    url: `${bkt0}/BILL%20EVANS%20-%20WHAT%20ARE%20YOU%20DOING%20THE%20REST%20OF%20YOUR%20LIFE_.mp3`,
  },
  {
    name: `BILLIE HOLIDAY - GLOOMY SUNDAY`,
    url: `${bkt0}/BILLIE%20HOLIDAY%20-%20GLOOMY%20SUNDAY.mp3`,
  },
  {
    name: `BILLIE HOLIDAY - I CAN'T GIVE YOU ANYTHING BUT LOVE`,
    url: `${bkt0}/BILLIE%20HOLIDAY%20-%20I%20CAN'T%20GIVE%20YOU%20ANYTHING%20BUT%20LOVE.mp3`,
  },
  {
    name: `BILLIE HOLIDAY - SOLITUDE`,
    url: `${bkt0}/BILLIE%20HOLIDAY%20-%20SOLITUDE.mp3`,
  },
  {
    name: `BILLIE HOLIDAY - THERE IS NO GREATER LOVE`,
    url: `${bkt0}/BILLIE%20HOLIDAY%20-%20THERE%20IS%20NO%20GREATER%20LOVE.mp3`,
  },
  {
    name: `BILLIE HOLIDAY - WHEN YOU'RE SMILING`,
    url: `${bkt0}/BILLIE%20HOLIDAY%20-%20WHEN%20YOU'RE%20SMILING.mp3`,
  },
  {
    name: `BING CROSBY - LET ME CALL YOU SWEETHEART`,
    url: `${bkt0}/BING%20CROSBY%20-%20LET%20ME%20CALL%20YOU%20SWEETHEART.mp3`,
  },
  {
    name: `BING CROSBY - LOOKS LIKE A COLD COLD WINTER`,
    url: `${bkt0}/BING%20CROSBY%20-%20LOOKS%20LIKE%20A%20COLD%20COLD%20WINTER.mp3`,
  },
  {
    name: `BING CROSBY - SOMETHING'S GOTTA GIVE`,
    url: `${bkt0}/BING%20CROSBY%20-%20SOMETHING'S%20GOTTA%20GIVE.mp3`,
  },
  {
    name: `BING CROSBY - YOU’RE ALL I WANT FOR CHRISTMAS`,
    url: `${bkt0}/BING%20CROSBY%20-%20YOU%E2%80%99RE%20ALL%20I%20WANT%20FOR%20CHRISTMAS.mp3`,
  },
  {
    name: `BLOSSOM DEARIE - YOU FOR ME`,
    url: `${bkt0}/BLOSSOM%20DEARIE%20-%20YOU%20FOR%20ME.mp3`,
  },
  {
    name: `BOHREN & DER CLUB OF GORE - PROWLER`,
    url: `${bkt0}/BOHREN%20%26%20DER%20CLUB%20OF%20GORE%20-%20PROWLER.mp3`,
  },
  {
    name: `BRANFORD MARSALIS - AGAIN NEVER`,
    url: `${bkt0}/BRANFORD%20MARSALIS%20-%20AGAIN%20NEVER.mp3`,
  },
  {
    name: `CHET BAKER  -  YOU DON'T KNOW WHAT LOVE IS`,
    url: `${bkt0}/CHET%20BAKER%20%20-%20%20YOU%20DON'T%20KNOW%20WHAT%20LOVE%20IS.mp3`,
  },
  {
    name: `CHET BAKER - 'ROUND MIDNIGHT`,
    url: `${bkt0}/CHET%20BAKER%20-%20'ROUND%20MIDNIGHT.mp3`,
  },
  {
    name: `CHET BAKER - ALL THE THINGS YOU ARE`,
    url: `${bkt0}/CHET%20BAKER%20-%20ALL%20THE%20THINGS%20YOU%20ARE.mp3`,
  },
  {
    name: `CHET BAKER - ALMOST BLUE`,
    url: `${bkt0}/CHET%20BAKER%20-%20ALMOST%20BLUE.mp3`,
  },
  {
    name: `CHET BAKER - AMAZING GRACE`,
    url: `${bkt0}/CHET%20BAKER%20-%20AMAZING%20GRACE.mp3`,
  },
  {
    name: `CHET BAKER - BUT NOT FOR ME`,
    url: `${bkt0}/CHET%20BAKER%20-%20BUT%20NOT%20FOR%20ME.mp3`,
  },
  {
    name: `CHET BAKER - DON'T EXPLAIN`,
    url: `${bkt0}/CHET%20BAKER%20-%20DON'T%20EXPLAIN.mp3`,
  },
  {
    name: `CHET BAKER - EVERYTHING HAPPENS TO ME`,
    url: `${bkt0}/CHET%20BAKER%20-%20EVERYTHING%20HAPPENS%20TO%20ME.mp3`,
  },
  {
    name: `CHET BAKER - FOR ALL WE KNOW`,
    url: `${bkt0}/CHET%20BAKER%20-%20FOR%20ALL%20WE%20KNOW.mp3`,
  },
  {
    name: `CHET BAKER - HARK, THE HERALD ANGELS SING`,
    url: `${bkt0}/CHET%20BAKER%20-%20HARK%2C%20THE%20HERALD%20ANGELS%20SING.mp3`,
  },
  {
    name: `CHET BAKER - IF YOU COULD SEE ME NOW`,
    url: `${bkt0}/CHET%20BAKER%20-%20IF%20YOU%20COULD%20SEE%20ME%20NOW.mp3`,
  },
  {
    name: `CHET BAKER - IT'S ALWAYS YOU`,
    url: `${bkt0}/CHET%20BAKER%20-%20IT'S%20ALWAYS%20YOU.mp3`,
  },
  {
    name: `CHET BAKER - LET'S GET LOST`,
    url: `${bkt0}/CHET%20BAKER%20-%20LET'S%20GET%20LOST.mp3`,
  },
  {
    name: `CHET BAKER - SAD WALK`,
    url: `${bkt0}/CHET%20BAKER%20-%20SAD%20WALK.mp3`,
  },
  {
    name: `CHET BAKER - THE NIGHT WE CALLED IT A DAY`,
    url: `${bkt0}/CHET%20BAKER%20-%20THE%20NIGHT%20WE%20CALLED%20IT%20A%20DAY.mp3`,
  },
  {
    name: `CHET BAKER - THE TOUCH OF YOUR LIPS`,
    url: `${bkt0}/CHET%20BAKER%20-%20THE%20TOUCH%20OF%20YOUR%20LIPS.mp3`,
  },
  {
    name: `CHET BAKER - TIME AFTER TIME`,
    url: `${bkt0}/CHET%20BAKER%20-%20TIME%20AFTER%20TIME.mp3`,
  },
  {
    name: `CHET BAKER, BILL EVANS - I TALK TO THE TREES`,
    url: `${bkt0}/CHET%20BAKER%2C%20BILL%20EVANS%20-%20I%20TALK%20TO%20THE%20TREES.mp3`,
  },
  {
    name: `CHILDISH GAMBINO - ME AND YOUR MAMA`,
    url: `${bkt0}/CHILDISH%20GAMBINO%20-%20ME%20AND%20YOUR%20MAMA.mp3`,
  },
  {
    name: `CHILDISH GAMBINO - REDBONE`,
    url: `${bkt0}/CHILDISH%20GAMBINO%20-%20REDBONE.mp3`,
  },
  {
    name: `CHILDISH GAMBINO - SOBER`,
    url: `${bkt0}/CHILDISH%20GAMBINO%20-%20SOBER.mp3`,
  },
  {
    name: `CHILDISH GAMBINO - TERRIFIED`,
    url: `${bkt0}/CHILDISH%20GAMBINO%20-%20TERRIFIED.mp3`,
  },
  {
    name: `CLAIRE LITTLEY - FLY ME TO THE MOON`,
    url: `${bkt0}/CLAIRE%20LITTLEY%20-%20FLY%20ME%20TO%20THE%20MOON.mp3`,
  },
  {
    name: `DAVE BRUBECK QUARTET - SANTA CLAUS IS COMIN' TO TOWN`,
    url: `${bkt0}/DAVE%20BRUBECK%20QUARTET%20-%20SANTA%20CLAUS%20IS%20COMIN'%20TO%20TOWN.mp3`,
  },
  {
    name: `DEAN MARTIN - AIN'T THAT A KICK IN THE HEAD`,
    url: `${bkt0}/DEAN%20MARTIN%20-%20AIN'T%20THAT%20A%20KICK%20IN%20THE%20HEAD.mp3`,
  },
  {
    name: `DEAN MARTIN - EVERYBODY LOVES SOMEBODY`,
    url: `${bkt0}/DEAN%20MARTIN%20-%20EVERYBODY%20LOVES%20SOMEBODY.mp3`,
  },
  {
    name: `DEAN MARTIN - I'LL BE HOME FOR CHRISTMAS`,
    url: `${bkt0}/DEAN%20MARTIN%20-%20I'LL%20BE%20HOME%20FOR%20CHRISTMAS.mp3`,
  },
  {
    name: `DEAN MARTIN - I'VE GOT MY LOVE TO KEEP ME WARM`,
    url: `${bkt0}/DEAN%20MARTIN%20-%20I'VE%20GOT%20MY%20LOVE%20TO%20KEEP%20ME%20WARM.mp3`,
  },
  {
    name: `DEAN MARTIN - JINGLE BELLS`,
    url: `${bkt0}/DEAN%20MARTIN%20-%20JINGLE%20BELLS.mp3`,
  },
  {
    name: `DJANGO REINHARDT - TEARS`,
    url: `${bkt0}/DJANGO%20REINHARDT%20-%20TEARS.mp3`,
  },
  {
    name: `DONALD GLOVER - II. SHADOWS`,
    url: `${bkt0}/DONALD%20GLOVER%20-%20II.%20SHADOWS.mp3`,
  },
  {
    name: `DUKE ELLINGTON - BOURBON STREET JINGLING JOLLIES`,
    url: `${bkt0}/DUKE%20ELLINGTON%20-%20BOURBON%20STREET%20JINGLING%20JOLLIES.mp3`,
  },
  {
    name: `DUKE ELLINGTON, JOHN COLTRANE - MY LITTLE BROWN BOOK`,
    url: `${bkt0}/DUKE%20ELLINGTON%2C%20JOHN%20COLTRANE%20-%20MY%20LITTLE%20BROWN%20BOOK.mp3`,
  },
  {
    name: `EDITH PIAF - NON, JE NE REGRETTE RIEN`,
    url: `${bkt0}/EDITH%20PIAF%20-%20NON%2C%20JE%20NE%20REGRETTE%20RIEN.mp3`,
  },
  {
    name: `ELLA FITZGERALD - ALL THE THINGS YOU ARE`,
    url: `${bkt0}/ELLA%20FITZGERALD%20-%20ALL%20THE%20THINGS%20YOU%20ARE.mp3`,
  },
  {
    name: `ELLA FITZGERALD - LET'S DO IT`,
    url: `${bkt0}/ELLA%20FITZGERALD%20-%20LET'S%20DO%20IT.mp3`,
  },
  {
    name: `ELLA FITZGERALD - SLEIGH RIDE`,
    url: `${bkt0}/ELLA%20FITZGERALD%20-%20SLEIGH%20RIDE.mp3`,
  },
  {
    name: `ELLA FITZGERALD, LOUIS ARMSTRONG - CHEEK TO CHEEK`,
    url: `${bkt0}/ELLA%20FITZGERALD%2C%20LOUIS%20ARMSTRONG%20-%20CHEEK%20TO%20CHEEK.mp3`,
  },
  {
    name: `ELLA FITZGERALD, LOUIS ARMSTRONG - DREAM A LITTLE DREAM OF ME`,
    url: `${bkt0}/ELLA_FITZGERALD%2C_LOUIS_ARMSTRONG_DREAM_A_LITTLE_DREAM_OF_ME.mp3`,
  },
  {
    name: `FRANK SINATRA - A MAN ALONE`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20A%20MAN%20ALONE.mp3`,
  },
  {
    name: `FRANK SINATRA - ALL MY TOMORROWS`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20ALL%20MY%20TOMORROWS.mp3`,
  },
  {
    name: `FRANK SINATRA - BLUE MOON`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20BLUE%20MOON.mp3`,
  },
  {
    name: `FRANK SINATRA - GOODBYE`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20GOODBYE.mp3`,
  },
  {
    name: `FRANK SINATRA - HAVE YOURSELF A MERRY LITTLE CHRISTMAS`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20HAVE%20YOURSELF%20A%20MERRY%20LITTLE%20CHRISTMAS.mp3`,
  },
  {
    name: `FRANK SINATRA - I DREAM OF YOU`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20I%20DREAM%20OF%20YOU.mp3`,
  },
  {
    name: `FRANK SINATRA - I' VE GOT A CRUSH ON YOU`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20I'%20VE%20GOT%20A%20CRUSH%20ON%20YOU.mp3`,
  },
  {
    name: `FRANK SINATRA - I'M A FOOL TO WANT YOU`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20I'M%20A%20FOOL%20TO%20WANT%20YOU.mp3`,
  },
  {
    name: `FRANK SINATRA - I'VE GOT YOU UNDER MY SKIN`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20I'VE%20GOT%20YOU%20UNDER%20MY%20SKIN.mp3`,
  },
  {
    name: `FRANK SINATRA - IF YOU GO AWAY`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20IF%20YOU%20GO%20AWAY.mp3`,
  },
  {
    name: `FRANK SINATRA - MY FUNNY VALENTINE`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20MY%20FUNNY%20VALENTINE.mp3`,
  },
  {
    name: `FRANK SINATRA - RAIN IN MY HEART`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20RAIN%20IN%20MY%20HEART.mp3`,
  },
  {
    name: `FRANK SINATRA - SILENT NIGHT`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20SILENT%20NIGHT.mp3`,
  },
  {
    name: `FRANK SINATRA - THE CHRISTMAS WALTZ`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20THE%20CHRISTMAS%20WALTZ.mp3`,
  },
  {
    name: `FRANK SINATRA - THE NEARNESS OF YOU`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20THE%20NEARNESS%20OF%20YOU.mp3`,
  },
  {
    name: `FRANK SINATRA - THE SADDEST THING OF ALL`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20THE%20SADDEST%20THING%20OF%20ALL.mp3`,
  },
  {
    name: `FRANK SINATRA - THE WAY YOU LOOK TONIGHT`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20THE%20WAY%20YOU%20LOOK%20TONIGHT.mp3`,
  },
  {
    name: `FRANK SINATRA - THE WORLD WE KNEW`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20THE%20WORLD%20WE%20KNEW.mp3`,
  },
  {
    name: `FRANK SINATRA - WHEN I LOST YOU`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20WHEN%20I%20LOST%20YOU.mp3`,
  },
  {
    name: `FRANK SINATRA - WHERE OR WHEN`,
    url: `${bkt0}/FRANK%20SINATRA%20-%20WHERE%20OR%20WHEN.mp3`,
  },
  {
    name: `FRANK SINATRA - LET IT SNOW! LET IT SNOW! LET IT SNOW!`,
    url: `${bkt0}/FRANK_SINATRA_LET_IT_SNOW!_LET_IT_SNOW!_LET_IT_SNOW!.mp3`,
  },
  {
    name: `GERRY MULLIGAN - IN THE WEE SMALL HOURS OF THE MORNING`,
    url: `${bkt0}/GERRY%20MULLIGAN%20-%20IN%20THE%20WEE%20SMALL%20HOURS%20OF%20THE%20MORNING.mp3`,
  },
  {
    name: `GERRY MULLIGAN - TELL ME WHEN`,
    url: `${bkt0}/GERRY%20MULLIGAN%20-%20TELL%20ME%20WHEN.mp3`,
  },
  {
    name: `GERRY MULLIGAN - TOPIC - NIGHT LIGHTS`,
    url: `${bkt0}/GERRY%20MULLIGAN%20-%20TOPIC%20-%20NIGHT%20LIGHTS.mp3`,
  },
  {
    name: `GIL EVANS - WHERE FLAMINGOS FLY`,
    url: `${bkt0}/GIL%20EVANS%20-%20WHERE%20FLAMINGOS%20FLY.mp3`,
  },
  {
    name: `GO_A - SHUM`,
    url: `${bkt0}/GO_A%20-%20%D0%A8%D0%A3%D0%9C.mp3`,
  },
  {
    name: `HAL DAVID - WHERE HAVE YOU BEEN ALL MY LIFE？`,
    url: `${bkt0}/HAL%20DAVID%20-%20WHERE%20HAVE%20YOU%20BEEN%20ALL%20MY%20LIFE%EF%BC%9F.mp3`,
  },
  {
    name: `JAZZHOLE13 - IKE QUEBEC - BLUE AND SENTIMENTAL`,
    url: `${bkt0}/JAZZHOLE13%20-%20IKE%20QUEBEC%20-%20BLUE%20AND%20SENTIMENTAL.mp3`,
  },
  {
    name: `BILL EVANS - I WILL SAY GOOD BYE`,
    url: `${bkt0}/JAZZ_%26_JAPAN_JAZZ_PIANO_BILL_EVANS_I_WILL_SAY_GOOD_BYE_FULL_ALBUM.mp3`,
  },
  {
    name: `JERRY GOLDSMITH - CHINATOWN`,
    url: `${bkt0}/JERRY%20GOLDSMITH%20-%20CHINATOWN.mp3`,
  },
  {
    name: `JOHN COLTRANE, JOHNNY HARTMAN - MY ONE AND ONLY LOVE`,
    url: `${bkt0}/JOHN%20COLTRANE%2C%20JOHNNY%20HARTMAN%20-%20MY%20ONE%20AND%20ONLY%20LOVE.mp3`,
  },
  {
    name: `JOHNNY SCOTT QUINTET - OTHELLO`,
    url: `${bkt0}/JOHNNY%20SCOTT%20QUINTET%20-%20OTHELLO.mp3`,
  },
  {
    name: `JULIE LONDON - WARM DECEMBER`,
    url: `${bkt0}/JULIE%20LONDON%20-%20WARM%20DECEMBER.mp3`,
  },
  {
    name: `LOUIS ARMSTRONG - A KISS TO BUILD A DREAM ON`,
    url: `${bkt0}/LOUIS%20ARMSTRONG%20-%20A%20KISS%20TO%20BUILD%20A%20DREAM%20ON.mp3`,
  },
  {
    name: `LOUIS ARMSTRONG - BLACK AND BLUE`,
    url: `${bkt0}/LOUIS%20ARMSTRONG%20-%20BLACK%20AND%20BLUE.mp3`,
  },
  {
    name: `LOUIS ARMSTRONG - I'VE GOT A FEELIN' I'M FALLING`,
    url: `${bkt0}/LOUIS%20ARMSTRONG%20-%20I'VE%20GOT%20A%20FEELIN'%20I'M%20FALLING.mp3`,
  },
  {
    name: `LOUIS ARMSTRONG - LA VIE EN ROSE`,
    url: `${bkt0}/LOUIS%20ARMSTRONG%20-%20LA%20VIE%20EN%20ROSE.mp3`,
  },
  {
    name: `LOUIS ARMSTRONG - NOBODY KNOWS THE TROUBLE I'VE SEEN`,
    url: `${bkt0}/LOUIS%20ARMSTRONG%20-%20NOBODY%20KNOWS%20THE%20TROUBLE%20I'VE%20SEEN.mp3`,
  },
  {
    name: `LOUIS ARMSTRONG - ST. JAMES INFIRMARY`,
    url: `${bkt0}/LOUIS%20ARMSTRONG%20-%20ST.%20JAMES%20INFIRMARY.mp3`,
  },
  {
    name: `LOUIS ARMSTRONG - WINTER WONDERLAND`,
    url: `${bkt0}/LOUIS%20ARMSTRONG%20-%20WINTER%20WONDERLAND.mp3`,
  },
  {
    name: `MADONNA - I DON’T SEARCH I FIND`,
    url: `${bkt0}/MADONNA%20-%20I%20DON%E2%80%99T%20SEARCH%20I%20FIND.mp3`,
  },
  {
    name: `MADONNA - MEDELLÍN`,
    url: `${bkt0}/MADONNA%20-%20MEDELL%C3%8DN.mp3`,
  },
  {
    name: `MANET - VENDREDI NOIR`,
    url: `${bkt0}/MANET%20-%20VENDREDI%20NOIR.mp3`,
  },
  {
    name: `MARCOS VALLE, STACEY KENT - DRIFT AWAY`,
    url: `${bkt0}/MARCOS%20VALLE%2C%20STACEY%20KENT%20-%20DRIFT%20AWAY.mp3`,
  },
  {
    name: `MARGARET WHITING - WHAT ARE YOU DOING NEW YEARS EVE`,
    url: `${bkt0}/MARGARET%20WHITING%20-%20WHAT%20ARE%20YOU%20DOING%20NEW%20YEARS%20EVE.mp3`,
  },
  {
    name: `MASSIMO CATALANO - FOGGY NIGHT`,
    url: `${bkt0}/MASSIMO%20CATALANO%20-%20FOGGY%20NIGHT.mp3`,
  },
  {
    name: `MATTHIJS JANSSEN - FRANK SINATRA - A MAN ALONE`,
    url: `${bkt0}/MATTHIJS%20JANSSEN%20-%20FRANK%20SINATRA%20-%20A%20MAN%20ALONE.mp3`,
  },
  {
    name: `MILES DAVIS - GÉNÉRIQUE`,
    url: `${bkt0}/MILES%20DAVIS%20-%20G%C3%89N%C3%89RIQUE.mp3`,
  },
  {
    name: `MILES DAVIS - IT NEVER ENTERED MY MIND`,
    url: `${bkt0}/MILES%20DAVIS%20-%20IT%20NEVER%20ENTERED%20MY%20MIND.mp3`,
  },
  {
    name: `MILES DAVIS - MILES DAVIS - BLUE IN GREEN`,
    url: `${bkt0}/MILES%20DAVIS%20-%20MILES%20DAVIS%20-%20BLUE%20IN%20GREEN.mp3`,
  },
  {
    name: `MILES DAVIS - NUIT SUR LES CHAMPS-ELYSEES`,
    url: `${bkt0}/MILES%20DAVIS%20-%20NUIT%20SUR%20LES%20CHAMPS-ELYSEES.mp3`,
  },
  {
    name: `MILES DAVIS - ROUND MIDNIGHT`,
    url: `${bkt0}/MILES%20DAVIS%20-%20ROUND%20MIDNIGHT.mp3`,
  },
  {
    name: `MILES DAVIS - STELLA BY STARLIGHT`,
    url: `${bkt0}/MILES%20DAVIS%20-%20STELLA%20BY%20STARLIGHT.mp3`,
  },
  {
    name: `NANCY WILSON - WHO CAN I TURN TO`,
    url: `${bkt0}/NANCY%20WILSON%20-%20WHO%20CAN%20I%20TURN%20TO_.mp3`,
  },
  {
    name: `NAT KING COLE  - THE LONELY ONE`,
    url: `${bkt0}/NAT%20KING%20COLE%20%20-%20THE%20LONELY%20ONE.mp3`,
  },
  {
    name: `NAT KING COLE - ADESTE FIDELES`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20ADESTE%20FIDELES.mp3`,
  },
  {
    name: `NAT KING COLE - FLY ME TO THE MOON`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20FLY%20ME%20TO%20THE%20MOON.mp3`,
  },
  {
    name: `NAT KING COLE - JOY TO THE WORLD`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20JOY%20TO%20THE%20WORLD.mp3`,
  },
  {
    name: `NAT KING COLE - L-O-V-E`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20L-O-V-E.mp3`,
  },
  {
    name: `NAT KING COLE - LOVE ME AS THOUGH THERE WERE NO TOMORROW`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20LOVE%20ME%20AS%20THOUGH%20THERE%20WERE%20NO%20TOMORROW.mp3`,
  },
  {
    name: `NAT KING COLE - THE CHRISTMAS SONG`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20THE%20CHRISTMAS%20SONG.mp3`,
  },
  {
    name: `NAT KING COLE - UNFORGETTABLE`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20UNFORGETTABLE.mp3`,
  },
  {
    name: `NAT KING COLE - YOU ARE MY FIRST LOVE`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20YOU%20ARE%20MY%20FIRST%20LOVE.mp3`,
  },
  {
    name: `NAT KING COLE - YOU'RE MY EVERYTHING`,
    url: `${bkt0}/NAT%20KING%20COLE%20-%20YOU'RE%20MY%20EVERYTHING.mp3`,
  },
  {
    name: `NIPPLE TAPES - WHN`,
    url: `${bkt0}/NIPPLE%20TAPES%20-%20WHN.mp3`,
  },
  {
    name: `PERRY COMO - KILLING ME SOFTLY WITH HER SONG`,
    url: `${bkt0}/PERRY%20COMO%20-%20KILLING%20ME%20SOFTLY%20WITH%20HER%20SONG.mp3`,
  },
  {
    name: `PIOTR WOJTASIK, JAROSŁAW ŚMIETANA - EMILLY`,
    url: `${bkt0}/PIOTR%20WOJTASIK%2C%20JAROS%C5%81AW%20%C5%9AMIETANA%20-%20EMILLY.mp3`,
  },
  {
    name: `ROBERTA FLACK - BALLAD OF THE SAD YOUNG MEN`,
    url: `${bkt0}/ROBERTA%20FLACK%20-%20BALLAD%20OF%20THE%20SAD%20YOUNG%20MEN.mp3`,
  },
  {
    name: `RON CARTER - THE SHADOW OF YOUR SMILE`,
    url: `${bkt0}/RON%20CARTER%20-%20THE%20SHADOW%20OF%20YOUR%20SMILE.mp3`,
  },
  {
    name: `RYO FUKUI - SCENERY`,
    url: `${bkt0}/RYO%20FUKUI%20-%20SCENERY.mp3`,
  },
  {
    name: `SCOTT HALLGREN - FILM NOIR`,
    url: `${bkt0}/SCOTT%20HALLGREN%20-%20FILM%20NOIR.mp3`,
  },
  {
    name: `SEATBELTS - ROAD TO THE WEST`,
    url: `${bkt0}/SEATBELTS%20-%20ROAD%20TO%20THE%20WEST.mp3`,
  },
  {
    name: `STEPHEN KUMMER - BABY, IT'S COLD OUTSIDE`,
    url: `${bkt0}/STEPHEN%20KUMMER%20-%20BABY%2C%20IT'S%20COLD%20OUTSIDE.mp3`,
  },
  {
    name: `SWAMI LATEPLATE - MALIGNANT CLOUD`,
    url: `${bkt0}/SWAMI%20LATEPLATE%20-%20MALIGNANT%20CLOUD.mp3`,
  },
  {
    name: `THE INK SPOTS - ALWAYS`,
    url: `${bkt0}/THE%20INK%20SPOTS%20-%20ALWAYS.mp3`,
  },
  {
    name: `THE INK SPOTS - I DON'T WANT TO SET THE WORLD ON FIRE`,
    url: `${bkt0}/THE%20INK%20SPOTS%20-%20I%20DON'T%20WANT%20TO%20SET%20THE%20WORLD%20ON%20FIRE.mp3`,
  },
  {
    name: `THE INK SPOTS - I'LL BE SEEING YOU`,
    url: `${bkt0}/THE%20INK%20SPOTS%20-%20I'LL%20BE%20SEEING%20YOU.mp3`,
  },
  {
    name: `THE INK SPOTS - IT'S ALL OVER BUT THE CRYING`,
    url: `${bkt0}/THE%20INK%20SPOTS%20-%20IT'S%20ALL%20OVER%20BUT%20THE%20CRYING.mp3`,
  },
  {
    name: `THE INK SPOTS - WE THREE`,
    url: `${bkt0}/THE%20INK%20SPOTS%20-%20WE%20THREE.mp3`,
  },
  {
    name: `TODD GORDON - ALONE AGAIN`,
    url: `${bkt0}/TODD%20GORDON%20-%20ALONE%20AGAIN.mp3`,
  },
  {
    name: `TONY BENNETT - A TIME FOR LOVE`,
    url: `${bkt0}/TONY%20BENNETT%20-%20A%20TIME%20FOR%20LOVE.mp3`,
  },
  {
    name: `TONY BENNETT - ISN'T IT ROMANTIC`,
    url: `${bkt0}/TONY%20BENNETT%20-%20ISN'T%20IT%20ROMANTIC.mp3`,
  },
  {
    name: `TONY BENNETT - MY FAVORITE THINGS`,
    url: `${bkt0}/TONY%20BENNETT%20-%20MY%20FAVORITE%20THINGS.mp3`,
  },
  {
    name: `TONY BENNETT - THE VERY THOUGHT OF YOU`,
    url: `${bkt0}/TONY%20BENNETT%20-%20THE%20VERY%20THOUGHT%20OF%20YOU.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - BOREDOM`,
    url: `${bkt0}/TYLER%2C%20THE%20CREATOR%20-%20BOREDOM.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - I THINK`,
    url: `${bkt0}/TYLER%2C%20THE%20CREATOR%20-%20I%20THINK.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - PEACH FUZZ`,
    url: `${bkt0}/TYLER%2C%20THE%20CREATOR%20-%20PEACH%20FUZZ.mp3`,
  },
  {
    name: `TYLER, THE CREATOR - PUPPET`,
    url: `${bkt0}/TYLER%2C%20THE%20CREATOR%20-%20PUPPET.mp3`,
  },
  {
    name: `VINCE GUARALDI - O TANNENBAUM`,
    url: `${bkt0}/VINCE%20GUARALDI%20-%20O%20TANNENBAUM.mp3`,
  },
];
