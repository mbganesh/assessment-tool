import { Button, TextField } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

export default function TESTINGPage() {
  const [views, setViews] = useState(0);
  const [delayTime, setDelayTime] = useState(0);
  const [videoLink, setVideoLink] = useState("");

  const myAllData = [
    ["Horoscopes accurately predict future events 85% of the time.", false],
    [
      "The National Weather Service will pay $30 for the rights to any original photograph of lightning. ",
      false,
    ],
    ["Liberace was a notorious womanizer. ", false],
    [
      'Due to a calendar mix-up, there were two years in a row identified as "1973". ',
      false,
    ],
    [
      "Contrary to popular belief, the white is not the healthiest part of an egg. It's actually the shell. ",
      false,
    ],
    ["Intelligent people have more zinc and copper in their hair.", true],
    [
      'The Spanish word esposa means "wife." The plural, esposas, means "wives," but also "handcuffs."',
      true,
    ],
    [
      "Every member of the Australian band Men at Work is currently unemployed.",
      false,
    ],
    ["In England, the Speaker of the House is not allowed to speak.", true],
    [
      "About 20% of gift cards never are redeemed at the full value of the card.",
      true,
    ],
    [
      "The only electrical equipment the Amish are allowed to use is a Panini press.",
      false,
    ],
    [
      "The Q-Tip was developed after serious design flaws were found in both the O-Tip and the P-Tip.",
      false,
    ],
    [
      'Superman is featured on every episode of "Seinfeld", either by name or pictures on Jerry\'s refrigerator.',
      true,
    ],
    [
      "In Bangladesh, kids as young as 15 can be jailed for cheating on their finals.",
      true,
    ],
    ["A 150-pound person weighs 165 pounds in Canada. ", false],
    [
      "The highest point in Pennsylvania is lower than the lowest point in Colorado.",
      true,
    ],
    [
      "George W. Bush, who presents himself as a man of faith, rarely goes to church. Yet he received votes from nearly two out of three voters who attend church at least once a week.",
      true,
    ],
    ["No one in Canada has a birthday on March 16th.", false],
    [
      "In the early 1950s, Philip Morris spent millions of dollars trying to teach dogs to smoke.",
      false,
    ],
    ["In 21 states, Wal-Mart is the single largest employer.", true],
    [
      "Pond's cold cream has an ingredient which is comprised of material which is found in pond scum.",
      false,
    ],
    [
      "One out of five people in the world (1.1 billion people) live on less than $1 per day.",
      true,
    ],
    [
      "For the first time in history, the number of people on the planet aged 60 or over will soon surpass those under 5.",
      true,
    ],
    ["The original name of Bank of America was Bank of Italy. ", true],
    [
      "Rome wasn't built in a day, although the contractor told them it would be.",
      false,
    ],
    ["The elephant is the only mammal that can't jump.", true],
    [
      "In the early 70s, McDonalds briefly offered customers a choice of French fries or consomme.",
      false,
    ],
    ["Soldiers from every country salute with their right hand.", true],
    ["A potato isn't a vegetable. It's a large bean.", false],
    ["America once issued a 5-cent bill.", true],
    [
      "Strains of bacteria similar to E. coli have been found in used printer cartridges - but only in the color cyan. Scientists have no explanation. ",
      false,
    ],
    [
      "At the first World Cup championship in Uruguay, 1930, the soccer balls were actually monkey skulls wrapped in paper and leather. ",
      false,
    ],
    [
      "Belt loops were invented fifty years earlier than the first belt.",
      false,
    ],
    [
      "The shoe Nikita Khrushchev used to bang on the United Nations table was purchased by Thom McAn.",
      false,
    ],
    [
      "Because he forgot his boots, Buzz Aldrin walked barefoot on the moon.",
      false,
    ],
    [
      "Each year, sixteen million gallons of oil run off pavement into streams, rivers and eventually oceans in the United States. This is more oil than was spilled by the Exxon Valdez.",
      true,
    ],
    [
      "The record for most appearances on the cover of Time Magazine is 26 by Tom Arnold.",
      false,
    ],
    [
      "G-rated family films earn more money than any other rating. Yet only 3% of Hollywood's output is G-rated.",
      true,
    ],
    [
      'Crate & Barrel once considered a merge with Linens & Things, forming a new chain "Linens & Barrels".',
      false,
    ],
    [
      'Sylvia Miles had the shortest performance ever nominated for an Oscar with "Midnight Cowboy." Her entire role lasted only six minutes.',
      true,
    ],
    [
      "So far, Congress has authorized $152,600,000,000 for the Iraq war. This is enough to build over 17,500 elementary schools.",
      true,
    ],
    [
      "The wobble in the rotation of the earth is causing a shift in its magnetic field. By the year 2327, the magnetic North Pole will be located in mid-Kansas, while the South Pole will be just off the coast of East Africa. ",
      false,
    ],
    [
      "The Boeing 747 is capable of flying upside-down, except the wings would shear off when trying to roll it over. ",
      false,
    ],
    [
      "In Salt Lake City, Utah, all TGIFriday's restaurants must close at 6 pm on Friday.",
      false,
    ],
    [
      "In 2003, the Transportation Security Administration dropped a requirement that air marshals pass a marksmanship test. Some applicants were even hired after they repeatedly shot flight attendants in mock hijacking episodes.",
      true,
    ],
    [
      "The New York City subway system, in an effort to raise revenue, is considering selling sponsorships of individual stations to corporations. Riders could soon be getting off at Nike Grand Central Station or Sony Times Square.",
      true,
    ],
    [
      "Apple is working on a solar-powered iPod. The only drawback is that the solar panels make the unit the size of a large pizza box.",
      false,
    ],
    [
      "The Venezuelan brown bat can detect and dodge individual raindrops in mid-flight, arriving safely back at his cave completely dry.",
      false,
    ],
    [
      "On EBay, there are an average of $680 worth of transactions each second.",
      true,
    ],
    ["Between 1942 and 1944, Academy Awards were made of plaster.", true],
    [
      'If you were to spell out numbers, you would you have to go until 1,000 until you would find the letter "A".',
      true,
    ],
    [
      "To ensure prompt delivery of e-mail, the post office recommends affixing a 41-cent stamp to your computer. ",
      false,
    ],
    [
      "If you keep a goldfish in the dark room, it will eventually turn white.",
      true,
    ],
    ["35 Billion e-mails are sent each day throughout the world.", true],
    ["The least popular song to make love to: Taps.", false],
    [
      "A Nigerian woman was caught entering the UK with 104 kg of snails in her baggage.",
      true,
    ],
    ['In England, in the 1880\'s, "Pants" was considered a dirty word.', true],
    ["Larry the Cable Guy has an illegal cable hook-up. ", false],
    [
      "Most of the deck chairs on the Queen Mary 2 have had to be replaced because overweight Americans were breaking them.",
      true,
    ],
    [
      'When George Lucas was mixing the American Graffiti soundtrack, he numbered the reels of film starting with an R and numbered the dialog starting with a D. Sound designer Walter Murch asked George for Reel 2, Dialog 2 by saying "R2D2". George liked the way that sounded so much he integrated that into another project he was working on.',
      true,
    ],
    [
      'The "UL" designation (popular in the late 20th century, but not widely used now) was purchased by Consumer Reports in 1995. ',
      false,
    ],
    [
      "David Bowie thinks he is being stalked by someone who is dressed like a giant pink rabbit. Bowie has noticed the fan at several recent concerts, but he became alarmed when he got on a plane and the bunny was on board.",
      true,
    ],
    [
      'Fish have "dandruff" caused by their scales that flake off, and it is impossible to filter all traces of it from drinking water. ',
      false,
    ],
    [
      "Solid structures (parking lots, roads, buildings) in the United States cover an area the size of Ohio.",
      true,
    ],
    [
      "After he was President, Harry S. Truman briefly coached the Boston Celtics. (thanks to Eric Snyder) ",
      false,
    ],
    [
      'The Mars Rover "Spirit" is powered by six small motors the size of "C" batteries. It has a top speed of 0.1 mph.',
      true,
    ],
    [
      "Burt Reynolds was originally cast to be Han Solo in the first Star Wars film. He dropped out before filming.",
      true,
    ],
    ["Chewing gum while peeling onions will keep you from crying.", true],
    ["Average life span of a major league baseball: 7 pitches", true],
    [
      "A private elementary school in Alexandria, Virginia, accidentally served margaritas to its schoolchildren, thinking it was limeade.",
      true,
    ],
    [
      'Eleven top executives of the Direct Marketing Association (the telemarketers\' group that is trying to kill the federal "Do Not Call" list) have registered for the list themselves.',
      true,
    ],
    [
      "Percentage of men who say they are happier after their divorce or separation: 58",
      true,
    ],
    ['Osama bin Laden had seen Woody Allen\'s "Annie Hall" 15 times.', false],
    [
      "Johnny Plessey batted .331 for the Cleveland Spiders in 1891, even though he spent the entire season batting with a rolled-up, lacquered copy of the Toledo Post-Dispatch. ",
      false,
    ],
    [
      "More than 2,500 left-handed people are killed each year from using products that are made for right-handed people.",
      true,
    ],
    [
      "American Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first class.",
      true,
    ],
    [
      "For every ton of fish that is caught in all the oceans on our planet, there are three tons of garbage dumped into the oceans.",
      true,
    ],
    ["Iceland consumes more Coca-Cola per capita than any other nation.", true],
    [
      "There has been no mail delivery in Canada on Saturday for the last thirty five years.",
      true,
    ],
    [
      'Lou Ferrigno complains that years after "The Hulk" went off the air, he\'d still turn green when angered. ',
      false,
    ],
    [
      "When you flip the 2005 Minnesota statehood quarter, heads will come up 61% of the time instead of the expected 50%. ",
      false,
    ],
    [
      "British pop singer Baby Spice is the great-great-great-great-great-great-grandniece of Archduke William Pinkley-Hogue of Staffordshire, making her 103rd in line for the throne of England. ",
      false,
    ],
    [
      "During a nine month strike in 2002, the Weather Channel broadcast reruns.",
      false,
    ],
    [
      "There is a Starbucks in Myungdong, South Korea that is five stories tall.",
      true,
    ],
    [
      "It is nearly three miles farther to fly from Amarillo, Texas to Louisville, Kentucky than it is to return from Louisville to Amarillo. ",
      false,
    ],
    [
      'Citizens in Ohio unsuccessfully tried to start a charitable organization called "The Salvation Coast Guard". (thanks to Eric Snyder) ',
      false,
    ],
    [
      'Thomas Edison was the first person ever to say "does my voice really sound like that?"',
      false,
    ],
    [
      "Due to a horse shortage, the 1936 Kentucky Derby was run with giraffes.",
      false,
    ],
    [
      'The practice of putting a letter "e" in front of words to mean "web-based" (e.g., eBusiness, eLearning, etc.) was patented by Microsoft in 1992. They are waiting until their anti-trust trial has been officially completed to begin enforcing it. ',
      false,
    ],
    [
      "Alexander Graham Bell (who invented the telephone) also set a world water-speed record of over seventy miles an hour at the age of 72.",
      true,
    ],
    ["Over 1,000 birds a year die from smashing into windows.", true],
    ["82% of Americans made a purchase at Wal-Mart in 2002.", true],
    ["In comic strips, the person on the left always speaks first.", true],
    [
      "The weight of air in a milk glass is about the same as the weight of an aspirin tablet.",
      true,
    ],
    ['22% of airline pilots have a child named "Roger".', false],
    [
      "Until last year, National Hockey League games that ended in a tie were settled by the Vice President. ",
      false,
    ],
    [
      "If you hook Jell-O up to an EEG, it registers movements almost identical to a human adult's brain waves.",
      true,
    ],
    [
      "The ant, when intoxicated, will always fall over to its right side.",
      true,
    ],
    [
      'The little hole in the sink that lets the water drain out, instead of flowing over the side, is called a "porcelator."',
      true,
    ],
    [
      "Elastic in underwear will last twice as long if you refrigerate your underwear after washing.",
      false,
    ],
    [
      "A bad case of laryngitis forced Abraham Lincoln to lip-sync the Gettysburg Address. The speech was actually delivered by an aide hidden beneath the stage. ",
      false,
    ],
    [
      "When you hear a bullwhip snap, it's because the tip is traveling faster than the speed of sound.",
      true,
    ],
    [
      "The US Army is handing out $2,500 to Fallujah residents whose property was destroyed by US planes and artillery.",
      true,
    ],
    [
      "The first Egyptian chariots were powered by sails. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Anthropologists have discovered a tribe of South American monkeys with a rudimentary system of government analogous to our own three-branch form of government. ",
      false,
    ],
    [
      "32 out of 33 samples of well-known brands of milk purchased in Los Angeles and Orange counties in California had trace amounts of perchlorate. Perchlorate is the explosive component in rocket fuel.",
      true,
    ],
    [
      "85% of the men that die while having sex are cheating on their wives. (thanks to Barbara Bassett) ",
      true,
    ],
    [
      "Electronics merchant Radio Shack may have to change its name because of a pending lawsuit from Shaquille O'Neal.",
      false,
    ],
    [
      "Al Gore's roommate in college (Harvard, class of 1969) was Tommy Lee Jones.",
      true,
    ],
    ["The Nixon-Kennedy debates of 1960 used a laugh track.", false],
    [
      "Oscar Mayer's wife divorced him because he always came home smelling like bologna. ",
      false,
    ],
    ["It's against the law to slam your car door in Switzerland.", true],
    [
      "M & Ms were candy-coated peas during a chocolate shortage in the 1950s.",
      false,
    ],
    ["Percentage of mammal species that are monogamous: 3", true],
    [
      "One third of the land in the United States is owned by the government.",
      true,
    ],
    ["One out of ten children in Europe are conceived on an IKEA bed.", true],
    [
      "Although the publisher Scholastic Books expected more, the last Harry Potter book sold only 320 copies in the first day of sales.",
      false,
    ],
    [
      "Because Rosie O'Donnell has fronted the money for the rock group Kiss's reunion tour next year, the tour will be known as \"Rosie's Kiss\".",
      false,
    ],
    ["Polar bears can eat as many as 22 penguins in a single sitting. ", false],
    ["Owls are the only birds who can see the color blue.", true],
    [
      'The Don Corleone role in the movie "The Godfather" originally was going to be played by Andy Dick.',
      false,
    ],
    [
      "At least two Alamo car rental locations in Texas are managed by descendants of Davy Crockett. ",
      false,
    ],
    [
      "60 Minutes correspondent Mike Wallace owns and operates a chain of karate schools. ",
      false,
    ],
    ["Bats always turn left when exiting a cave.", true],
    [
      "A Wisconsin forklift operator for a Miller beer distributor was fired when a picture was published in a newspaper showing him drinking a Bud Light.",
      true,
    ],
    ["Gary Busey has won more Academy Awards than any other actor.", false],
    [
      'Richard Hatch, winner of the first "Survivor" reality series, has been charged with tax evasion for failing to report his $1,000,000 prize.',
      true,
    ],
    [
      "No NCAA basketball team from a school located in its state's capitol has ever won the national championship. ",
      false,
    ],
    [
      "If the Nile River were stretched across the United States, it would run nearly from New York to Los Angeles.",
      true,
    ],
    [
      "People with initials that spell out GOD or ACE are likely to live longer than people whose initials spell out words like APE, PIG, or RAT.",
      true,
    ],
    ["20% of Americans think that the sun orbits around the Earth.", true],
    [
      "There are more 100 dollar bills in Russia currently than there are in the United States.",
      true,
    ],
    ["Peanuts are one of the ingredients in dynamite.", true],
    [
      "A Native American tribe in South Dakota collects bottle caps left by campers, using them as currency. Several banks in the area now recognize the caps as legal tender. ",
      false,
    ],
    ["Two-thirds of the world's eggplant is grown in New Jersey.", true],
    ['The "you are here" arrow on maps is called an ideo locator.', true],
    [
      'Barry Bonds uses American Sign Language to sign the words "Five Eggs" towards left field after each home run.',
      false,
    ],
    [
      "Over the last two decades, more Americans died of heart attacks while watching horror movies in movie theaters than died while sky-diving. ",
      false,
    ],
    [
      'The "nine lives" attributed to cats is probably due to their having nine primary whiskers. ',
      false,
    ],
    [
      "In many Eskimo schools, they don't teach multiplication. Division is taught, however.",
      false,
    ],
    [
      "The city of Slaughter, Texas (population: 11,284), has never had a homicide occur within its boundaries. ",
      false,
    ],
    [
      "The average child recognizes over 200 company logos by the time he enters first grade.",
      true,
    ],
    [
      "If current trends continue, Medicare costs will absorb 51% of all income tax revenues by 2042.",
      true,
    ],
    ["The first Fords had engines made by Dodge.", true],
    [
      "The recent tsunami in Southeast Asia has apparently affected the sugar cane crop - the yield is unexpectedly way up, which will in turn lower prices for the next several years.",
      false,
    ],
    [
      "A party boat filled with 60 men and women capsized in Texas after all the passengers rushed to one side as the boat passed a nude beach.",
      true,
    ],
    ["Every time you lick a stamp, you're consuming 1/10 of a calorie.", true],
    ["The average chocolate bar has 8 insect legs in it.", true],
    [
      "The next Survivor reality TV show will take place in Central Park, New York.",
      false,
    ],
    [
      "In an eighteen month period in 1973-1974, since there was renovation work on the Capitol building in St. Paul, Minnesota, state government was actually run out of an office building in River Falls, Wisconsin.",
      false,
    ],
    ["100% of all lottery winners gain weight.", true],
    ["Until 1970, the IRS taxed Monopoly winnings. ", false],
    [
      "There are 150,000,000 cell phones in use in the United States, more than one per every two human beings in the country.",
      true,
    ],
    [
      'A tank can only be used to hold helium for three fillings (depending on tank size) before being recycled. The very small helium atom actually leaks out of the tank - in between the molecules of the steel tank - in effect actually "eating away" the tank walls.',
      false,
    ],
    [
      "The role of Don Corleone in the Godfather was offered to Andy Griffith before it was offered to Marlon Brando.",
      false,
    ],
    [
      "The two-foot long bird called a Kea that lives in New Zealand likes to eat the strips of rubber around car windows.",
      true,
    ],
    [
      "A female ferret will die if it goes into heat and cannot find a mate.",
      true,
    ],
    ["Singer Bruno Mars was born Bruno Venus.", false],
    ["A snail can have about 25,000 teeth.", true],
    ["Barbie's full name is Barbara Millicent Roberts.", true],
    [
      "During your lifetime, you'll eat about 60,000 pounds of food. That's the weight of about 6 elephants.",
      true,
    ],
    ["Half of all Americans live within 50 miles of their birthplace.", true],
    [
      "Some ribbon worms will eat themselves if they can't find any food.",
      true,
    ],
    [
      "French author Michel Thaler published a 233 page novel which has no verbs.",
      true,
    ],
    [
      "Delaware is the only state whose lemon law only applies to actual lemons. ",
      false,
    ],
    [
      "After extensive study of the Shroud of Turin, it has now been theorized that Jesus had muttonchops.",
      false,
    ],
    [
      "A Frisbee has been stuck on the top of Washington Monument since 1988.",
      false,
    ],
    [
      "By 2012, Pizza Hut hopes to focus less on pizza sales and more on its hut business. ",
      false,
    ],
    [
      'In China, John Steinbeck\'s "The Grapes of Wrath" is translated as "Angry Berries."',
      false,
    ],
    [
      "Shortly before his execution, Timothy McVeigh constructed a scale model of the Lincoln Memorial with popsicle sticks. ",
      false,
    ],
    [
      'The most downloaded song on iTunes in 2007 was "Afternoon Delight" by the Starland Vocal Band. ',
      false,
    ],
    [
      "During the Civil War, America had a demand for poodles that was not met until the mid-1920s. ",
      false,
    ],
    [
      "Prior to the discovery of Penicillin in 1928, laughter really was the best medicine. ",
      false,
    ],
    ["Lightning strikes about 6,000 times per minute on this planet.", true],
    ["The international telephone dialing code for Antarctica is 672.", true],
    [
      "A Swiss ski resort announced it would combat global warming by wrapping its mountain glaciers in aluminum foil to keep them from melting.",
      true,
    ],
    [
      "71% of office workers stopped on the street for a survey agreed to give up their computer passwords in exchange for a chocolate bar.",
      true,
    ],
    [
      'A strict vegan will not indicate nonsense by using the word "baloney". ',
      false,
    ],
    [
      "When eaten, long vegetables (such as carrots, celery, etc.) that have been sliced lengthwise have double the vitamins absorbed by the body.",
      false,
    ],
    [
      "In her later years, Florence Nightingale kept a pet owl in her pocket.",
      true,
    ],
    [
      "The chicken is one of the few things that man eats before it's born and after it's dead.",
      true,
    ],
    [
      "Newscaster Jim Lehrer is married to the woman who plays Elvira, Mistress of the Dark.",
      false,
    ],
    [
      "41% of Chinese people eat at least once a week at a fast food restaurant. 35% of Americans do.",
      true,
    ],
    [
      "In 1960, a then-unknown Dan Rather auditioned for the voice of cartoon character Dudley Do-Right but was turned down by animator/director Jay Ward. ",
      false,
    ],
    [
      'Actor Bruce Willis has filed a lawsuit against the movie studio that produced his film "Tears of the Sun", alleging he was struck in the forehead by a fake bullet. Since 2002 (when the movie was in production), the lawsuit claims he has endured "extreme mental, physical, and emotional pain and suffering".',
      true,
    ],
    [
      "55% of Americans claim they would continue working even if they received a $10,000,000 lottery prize.",
      true,
    ],
    ["A toothpick is the object most often choked on by Americans.", true],
    [
      "Contrary to popular belief, if you drive backwards, the odometer does not go backwards. It actually makes the odometer less accurate - up to 10% for each six miles driven backwards. ",
      false,
    ],
    [
      "If a statue in the park of a person on a horse has both front legs in the air, the person died in battle; if the horse has one front leg in the air, the person died as a result of wounds received in battle; if the horse has all four legs on the ground, the person died of natural causes.",
      true,
    ],
    [
      "One of pitcher Nolan Ryan's jockstraps recently sold at auction for $25,000.",
      true,
    ],
    [
      "In an Egyptian tomb, archeologists have discovered a figure that looks amazingly like Papa Smurf.",
      false,
    ],
    ["65% of Elvis impersonators are of Asian descent.", true],
    ["Goldfish are neither gold nor fish.", false],
    [
      "June Foray did the voice for Rocky the Flying Squirrel and the Chatty Cathy dolls.",
      true,
    ],
    ["You'll eat about 35,000 cookies in your lifetime.", true],
    [
      "J. Edgar Hoover's last act as the director of the FBI was writing the warning that appears at the start of movies.",
      false,
    ],
    [
      'Pain is measured in units of "dols". The instrument used to measure pain is a "dolorimeter".',
      true,
    ],
    ["Scuba divers cannot pass gas at depths of 33 feet or below. ", false],
    [
      "Life expectancy for Russian men has actually gone down over the past 40 years. A Russian male born today can expect to live an average 58 years.",
      true,
    ],
    [
      "In 1997, a woman in Bradenton, Florida lost her cat. In 2004, she got a call from the local animal shelter. The cat turned up wandering the streets in San Francisco, California. The cat's identity was proven with a microchip that had been implanted prior to 1997.",
      true,
    ],
    [
      "At thirteen hospitals around the country, there is a Dr. Pepper on staff.",
      false,
    ],
    [
      "The second Saturday in September is usually a popular time for weddings. Not in 2004, as most couples did not want their anniversaries on September 11.",
      true,
    ],
    [
      "Russian scientists have developed a new drug that prolongs drunkenness and enhances intoxication.",
      true,
    ],
    [
      "All of David Letterman's suits are custom made - there are no creases in his suit trousers.",
      true,
    ],
    ["One in every 4 Americans has appeared on television.", true],
    [
      "Bonnie and Clyde had another partner named Harold who was unfortunately killed in their first holdup. (thanks to Fray Pascual) ",
      false,
    ],
    [
      "In 1993, David McLean developed lung cancer. He died on October 12, 1995. McLean's death made him the second Marlboro Man to die of lung cancer. Another actor, Wayne McLaren, died in 1992 at the age of 51 from lung cancer.",
      true,
    ],
    ["Nobody born in Kentucky has ever been elected to Congress. ", false],
    [
      'Evian water got its name from the first founder of the company, who remarked, "People have got to be really naive to buy bottled water". The name stuck; Evian is naive backwards.',
      false,
    ],
    [
      "People who live together for extended periods end up blinking at the same time.",
      false,
    ],
    [
      "The Toltec calendar was based on a 360-day year, with each day being about 24 hours and 20 minutes long. ",
      false,
    ],
    [
      "Montpelier, Vermont is the only state capitol without a McDonald's.",
      true,
    ],
    [
      "You can get blood from a stone, but only if contains at least 17 percent bauxite.",
      false,
    ],
    ["The youngest pope was 11 years old.", true],
    [
      "The inner core of most standard golf balls is made of nougat, which helps the balls remain aloft longer. ",
      false,
    ],
    ["The FBI's eleventh most wanted fugitive is Lyle Lovett.", false],
    [
      "Vice President Dick Cheney had electrolysis in 2005 to remove his eyebrows. The ones you see now are tattooed on.",
      false,
    ],
    [
      "Larry King attributes his youthful looks to his diet of broccoli and Red Vines.",
      false,
    ],
    ["A giraffe can clean its ears with its 21-inch tongue.", true],
    [
      "Teddy Roosevelt was an avid hunter. On one safari, he bagged 16 Avids.",
      false,
    ],
    ["Our shortest president was James Madison at 3 feet, 11 inches. ", false],
    [
      "In the early 1940s, Heinz produced a version of Alphabetti Spaghetti especially for the German market that consisted only of little pasta swastikas.",
      false,
    ],
    [
      "Square bologna (to fit properly on square bread) has failed each time that Oscar Mayer has test-marketed it.",
      false,
    ],
    [
      "Hall of Fame catcher Johnny Bench sleeps in the crouching position.",
      false,
    ],
    [
      "The world's youngest parents were 8 and 9 and lived in China in 1910.",
      true,
    ],
    ["23% of employees say they have had sex in the office.", true],
    [
      "Like George W. Bush, in college, Saddam Hussein was a cheerleader.",
      false,
    ],
    ["60% of all US potato products originate in Idaho.", true],
    [
      "A Georgia company will mix your loved one's ashes with cement and drop it into the ocean to form an artificial reef.",
      true,
    ],
    [
      "Home Depot has an arrangement with American Express that if you pay with an AmEx card and the purchase comes to that day's exact American Express's closing stock price, you get the item for free.",
      false,
    ],
    [
      'Ben Franklin actually coined the phrase "Live Long and Prosper". (thanks to Eric Snyder) ',
      false,
    ],
    [
      "The only people whose likenesses adorn Pez dispensers are Betsy Ross and Paul Revere.",
      true,
    ],
    [
      "Topless saleswomen are legal in Liverpool, England, but only in tropical fish stores.",
      true,
    ],
    ["In some parts of Wyoming, it's legal to hunt the elderly. ", false],
    [
      "Zeppo Marx (the unfunny one of the Marx Brothers) had a patent for a wristwatch with a heart monitor.",
      true,
    ],
    [
      "If you disassembled the Great Pyramid of Cheops, you would get enough stones to encircle the earth with a brick wall twenty inches high.",
      true,
    ],
    ["Rhode Island is the only state without an active volcano.", false],
    ["Jimmy Carter once reported a UFO in Georgia.", true],
    ["The last dinosaur roamed the earth in 1946.", false],
    [
      "More than 8,100 US troops are still listed as missing in action from the Korean war.",
      true,
    ],
    [
      "Ten years ago, only 500 people in China could ski. This year, an estimated 5,000,000 Chinese will visit ski resorts.",
      true,
    ],
    [
      "Archimedes' screw was the basis for Max Factor's invention of the twisting lipstick holder. ",
      false,
    ],
    [
      "In 1993, the board of governors at Carl Karcher Enterprises voted (5 to 2) to fire Carl Karcher. Carl Karcher is the founder of Carls Jr. restaurants.",
      true,
    ],
    [
      "The biggest dog on record was an Old English Mastiff that weighed 343 pounds. He was 8 feet, 3 inches from nose to tail.",
      true,
    ],
    ['In 1982, Kim Jong Il was a contestant on "Tic Tac Dough".', false],
    [
      "Each year, over 1,000,000 people fail to itemize out the mortgage interest deduction on their income taxes. Last year, this amounted to $473,000,000 in   taxes.",
      true,
    ],
    [
      "Barbara Walters is part owner of two NHL teams. She is prohibited from attending when the teams play each other.",
      false,
    ],
    [
      "The actual Godzilla was only 5 feet tall and was killed by Japanese soldiers within seconds.",
      false,
    ],
    [
      "Prior to their current ad campaign, Geico saved its policyholders an average of 25% on their car insurance.",
      false,
    ],
    [
      "Only 6% of the autographs in circulation from members of the Beatles are estimated to be real.",
      true,
    ],
    [
      "Isaac Newton invented the game Hopscotch. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Americans take an average of just ten days per year vacation. In France, the law guarantees everyone five weeks of vacation, and most full-time workers get two full months vacation.",
      true,
    ],
    ["Babe Ruth's last words were, \"the money's on the dresser.\" ", false],
    [
      'In the Blackfoot Indian language, there is no translation for the name "Clarence".  (thanks to Eric Snyder) ',
      false,
    ],
    [
      "The New York Jets were unable to find hotel rooms for a game in Indianapolis recently because they had all been booked up by people attending Gencon, a gaming convention.",
      true,
    ],
    ['The most common greeting in Holland is "Hey, nice hat!"', false],
    [
      "Two out of five Americans shower with a bathing suit on. (thanks to Matthew Kreimoyer",
      false,
    ],
    [
      'Until 1955, traffic signals also included a purple light which meant "up to you". ',
      false,
    ],
    ["All Costco locations are closed each July 1 for inventory.", false],
    ["The province of Alberta, Canada is completely free of rats.", true],
    [
      "The St. Valentine's Massacre was set up by Hallmark in the hopes of selling more cards.  (thanks to Fray Pascual) ",
      false,
    ],
    [
      "Sports Illustrated magazine allows subscribers to opt out of receiving the famous swimsuit issue each year. Fewer than 1% choose this option.",
      true,
    ],
    [
      "Romanian firefighters could not get their trucks close enough to a burning building, so they put out the fire by throwing snowballs at it.",
      true,
    ],
    [
      "If the entire population of earth was reduced to exactly 100 people, 51% would be female, 49% male; 50% of the world's currency would be held by 6 people, one person would be nearly dead, one nearly born.",
      true,
    ],
    ["The Westminster Kennel Club also hosts an annual Kangaroo Show.", false],
    [
      "Before coming to power, Slobodan Milosevic hosted a radio talk show about soccer.",
      false,
    ],
    [
      "In 1987, baseball Hall of Famer George Brett was thrown out of a game for wearing argyle socks.",
      false,
    ],
    ["President Richard Nixon was an avid CB radio user.", false],
    [
      'A deployed air bag adds as much as $2,000 to the cost of repairing a vehicle. That\'s enough for insurance companies to often declare the car "totaled".',
      true,
    ],
    ["One of every two thousand babies is born fully clothed. ", false],
    [
      "If you have three quarters, four dimes and four cents, you have $1.19. But you cannot make exact change for a dollar.",
      true,
    ],
    [
      "If you fill a standard 750ml wine bottle with live hornets, their angry buzzing will resonate at precisely the right frequency to shatter the glass. ",
      false,
    ],
    [
      'The most frequently used word in the English language is "biscuit."',
      false,
    ],
    ["Yellow Hi-liter is an excellent source of Vitamin C. ", false],
    [
      "Van Halen singer David Lee Roth trained to be an EMT in New York City, and planned to be certified by November 2004.",
      true,
    ],
    ["Almonds are members of the peach family.", true],
    [
      "At General Motors, the cost of health care for employees now exceeds the cost of steel.",
      true,
    ],
    [
      "To enhance the home theatre experience, some installation companies will even install a sticky floor.",
      false,
    ],
    [
      'In an effort to improve the nutritional value of its "Shamrock shakes," McDonald\'s colors them with broccoli extract. ',
      false,
    ],
    ["The flush toilet was invented in Flushing, NY. ", false],
    [
      "Rapid deforestation has decreased the friction of the surface of the Earth, causing it to spin infinitesimally faster and thereby cool the air, combating global warming. ",
      false,
    ],
    ["Kim Jong Il has a star on the walk of fame in Hollywood.", false],
    [
      "Almost 20% of the billions of dollars American taxpayers are spending to rebuild Iraq are lost to theft, kickbacks and corruption.",
      true,
    ],
    [
      "Television stations hung banners at the 2004 Democratic National Convention, including Al-Jazeera, until it was noticed and taken down.",
      true,
    ],
    ["There are over 52.6 million dogs in the U.S.", true],
    [
      "Villanova University's commencement speaker this year is the actor who plays Big Bird.",
      true,
    ],
    ["Mark Twain didn't graduate from elementary school.", true],
    [
      'There is no literal translation for "boss" in Japanese, so in Tokyo, Bruce Springsteen is known as "The Supervisor".',
      false,
    ],
    [
      "John Kerry's hometown newspaper, the Lowell Sun, endorsed George W. Bush for president in 2004. Bush's hometown newspaper, the Lone Star Iconoclast, endorsed John Kerry for president in 2004.",
      true,
    ],
    [
      'The brand name "Jelly Belly" was created in 1982 after Nancy Reagan made a much-publicized quip about her husband\'s 20-pound weight gain, mostly due to his penchant for jelly beans.',
      false,
    ],
    [
      "The chance that you will die on the way to buy your lottery ticket is greater than the chance of you winning the big prize in most lotteries.",
      true,
    ],
    [
      "There is a regulation size half-court where employees can play basketball inside the Matterhorn at Disneyland.",
      true,
    ],
    ["You're most likely to be stung by a bee in windy weather.", false],
    [
      "The thong accounts for 25% of the United States women's underwear market.",
      true,
    ],
    [
      "Author Hunter S. Thompson, who committed suicide recently, wanted to be cremated and his ashes to be shot out of a cannon on his ranch.",
      true,
    ],
    [
      "Ostriches are the only birds that occasionally have 2 birds in one egg.",
      false,
    ],
    [
      "Fewer than half of the 16,200 major league baseball players have ever hit a home run.",
      true,
    ],
    ["No death-row inmate has ever asked for tofu as his last meal. ", false],
    ["John F. Kennedy was an accomplished ventriloquist. ", false],
    [
      "In 1920, Babe Ruth broke the single season home run record, with 29. The same year, he became the first major leaguer to hit 30 home runs. The same year, he became the first major leaguer to hit 40 home runs. The same year, he became the first major leaguer to hit 50 home runs.",
      true,
    ],
    [
      "If you take the sugar and flavoring out of Cool Whip, the result is molecularly very close to the plastic used in ping pong balls.",
      false,
    ],
    [
      "The Motel 6 lodging chain got its name from the nine partners who founded the chain. Unfortunately, the original partnership paperwork was filled out upside-down.",
      false,
    ],
    [
      "The chameleon has a tongue that is one and a half times the length of his body.",
      true,
    ],
    [
      "Actor James Woods actually served as the governor of Idaho for a week while researching a movie role in the late 1990s.",
      false,
    ],
    ["The average person burns 19 calories giving someone the finger. ", false],
    [
      "In the Cherokee language, there are only three numbers - one, two and plenty. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "The Harlem Globetrotters actually lost a game to the Washington Generals (July 5, 1989).",
      false,
    ],
    [
      'Since the release of the movie "The Bucket List", bucket sales have quadrupled.',
      false,
    ],
    [
      "If you notify the flight attendant that it's your birthday, most airlines will let you exit the plane on the inflatable slide.",
      false,
    ],
    ["A cucumber is 96% water and 4% cucumber.", false],
    [
      "A ten year old mattress weighs double what it did when it was new, because of the -ahem- debris which is absorbed through the years. That debris includes dust mites (their droppings and their decaying bodies), mold, millions of dead skin cells, dandruff, animal and human hair, secretions, excretions, lint, pollen, dust, soil, sand and a lot of perspiration, of which the average person loses a quart per day. Good night!",
      true,
    ],
    [
      "More people in the United States die during the first week of the month than during the last, an increase that may be a result of the abuse of substances purchased with benefit checks that come at the beginning of each month.",
      true,
    ],
    [
      "American made parts account for only 1% of the Chrysler Crossfire. 96% of the Ford F-150 Heritage Truck is American.",
      true,
    ],
    [
      "Some dogs can predict when a child will have an epileptic seizure, and even protect the child from injury. They're not trained to do this, they simply learn to respond after observing at least one attack.",
      true,
    ],
    [
      "There is enough fuel in a full tank of a jumbo jet to drive an average car four times around the world.",
      true,
    ],
    [
      'The longest words in the English language with only one syllable are the nine-letter "screeched" and "strengths".',
      true,
    ],
    ["Albert Einstein died on a mattress in a Serta showroom.", false],
    [
      "Osama Bin-Laden had a lifetime subscription to Mad magazine. (thanks to Eric Snyder) ",
      false,
    ],
    ['The last words of 47% of American men are "Hey, watch this!".', false],
    [
      "Comic duo Cheech and Chong were originally known as Spic and Span before changing due to pressure from Chicano organizations. ",
      false,
    ],
    [
      "Until 1796, there was a state in the United States called Franklin. Today it is known as Tennessee.",
      true,
    ],
    ["Thomas Edison, light bulb inventor, was afraid of the dark.", true],
    [
      "Isaac Newton invented the game Hopscotch. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Putting a stick of margarine in a diesel engine will increase mileage by approximately 10%. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "To the Vikings, it was considered rude to kill someone wearing green. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Albert Einstein was an avid body builder.  (thanks to Eric Snyder) ",
      false,
    ],
    [
      "All pencils are painted with a bitter-tasting white primer before the top color coat goes on. This is why the bite marks always are distasteful and are white.",
      false,
    ],
    ["Only 26% of ranchers actually use ranch dressing.", false],
    ["Human saliva has a boiling point twice that of regular water. ", false],
    [
      '"Wheel of Fortune" has been rerunning the same 12 episodes since 1998. ',
      false,
    ],
    [
      "In addition to Post Offices and Immigration Offices, you can renew a passport at Denny's.",
      false,
    ],
    ["Just as Larry is short for Lawrence, Gary is short for Gawrence.", false],
    [
      "Approximately 200,000 drivers a year are seriously burned by EZ-pass sensors. ",
      false,
    ],
    ['The word "apple" comes from the Latin word meaning "apple".', false],
    ["The glue on Israeli postage stamps is certified kosher.", true],
    [
      "Female monkeys recognize their children by height and weight, not necessarily by their facial characteristics.",
      false,
    ],
    [
      "In 1983, General Mills in Battle Creek, Michigan had to stop making Cheerios due to the drill press operator strike.  (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Singer/Actor Kris Kristofferson is considering a run for president to confuse New Jersey governor Chris Christie's supporters. ",
      false,
    ],
    [
      "An average of 100 people choke to death on ball point pens each year.",
      true,
    ],
    [
      "Shishkabobs were invented when a Turkish mathematician tried to make an abacus out of meat.",
      false,
    ],
    ["In the White House, there are 13,092 knives, forks and spoons.", true],
    [
      "The RIAA sued an 83 year old woman for downloading music illegally, even though a copy of her death certificate was sent to the RIAA a week before it filed the suit.",
      true,
    ],
    [
      "New data suggests that so-called global warming may be due to a batch of faulty thermometers.",
      false,
    ],
    ["The hummingbird is the only bird that can fly backwards.", true],
    ["There are less than 100 surviving American World War I veterans.", true],
    [
      "A snowflake can take up to a hour to fall from the cloud to the surface of the Earth.",
      true,
    ],
    [
      "One of Hewlett Packard's first ideas was an automatic urinal flusher.",
      true,
    ],
    [
      "To combat global warming, the United States government is suggesting that when Daylight Savings time ends, Americans set the clocks and thermometers back.",
      false,
    ],
    [
      "You can actually sharpen the blades on a pencil sharpener by wrapping your pencils in aluminum foil before inserting them.",
      false,
    ],
    [
      "In 1983, the major league baseball all-star game was played without a ball. ",
      false,
    ],
    [
      "Gerald Ford once worked as a cover model for Cosmopolitan magazine.",
      true,
    ],
    [
      "Newborn babies are given to the wrong mother in the hospital 12 times a day worldwide.",
      true,
    ],
    ["The first remote control took 8 minutes to change channels.", false],
    ["One person in two billion will live to be 116 or older.", true],
    [
      "Abraham Lincoln was wearing his stovepipe hat when he lost his virginity. ",
      false,
    ],
    [
      "Teddy Roosevelt was the last president to wear a hat in the shower.",
      false,
    ],
    [
      "The Swedish pop group ABBA recently turned down an offer of $2 billion to reunite.",
      true,
    ],
    [
      "Snakes are true carnivores as they eat nothing but other animals. They do not eat any type of plant material.",
      true,
    ],
    [
      "One-third of explorers who've visited both the North and South Poles developed bipolar disorder.",
      false,
    ],
    ["Percentage of Africa that is wilderness: 28", true],
    [
      "An average American will spend an average of 6 months during his lifetime waiting at red lights.",
      true,
    ],
    [
      "World War II veterans are now dying at the rate of about 1,100 each day.",
      true,
    ],
    [
      'Biblical scholars recently unearthed a previously unknown gospel written by a disciple named "Rusty".',
      false,
    ],
    [
      "Amusement park attendance goes up after a fatal accident. It seems many people want to ride upon the same ride that killed someone.",
      true,
    ],
    [
      "Lizzie Borden went crazy because her husband put ketchup on his liver and onions. (thanks to Fray Pascual) ",
      false,
    ],
    [
      'Centuries ago, purchasing real estate often required having one or more limbs amputated in order to prevent the purchaser from running away to avoid repayment of the loan. Hence an expensive purchase was said to cost "an arm and a leg." ',
      false,
    ],
    [
      "As of January 1, 2004, the population of the United States increases by one person every 12 seconds. There is a birth every eight seconds, an immigrant is added every 25 seconds, but a death every 13 seconds.",
      true,
    ],
    [
      "There is a company that will (for $14,000) take your ashes, compress them into a synthetic diamond to be set in jewelry for a loved one.",
      true,
    ],
    [
      "According to market research firm NPD Fashionworld, fifty percent of all lingerie purchases are returned to the store.",
      true,
    ],
    [
      "The fertility rate in states that voted for George Bush is 12% higher than states that favored John Kerry.",
      true,
    ],
    [
      "60.7 percent of eligible voters participated in the 2004 presidential election, the highest percentage in 36 years. However, more than 78 million did not vote. This means President Bush won re-election by receiving votes from less than 31% of all eligible voters in the United States.",
      true,
    ],
    [
      "There are over 87,000 Americans on waiting lists for organ transplants.",
      true,
    ],
    ["The Bible has been translated into Klingon.", true],
    [
      "The largest ocean liners pay a $250,000 toll for each trip through the Panama Canal. The canal generates fully one-third of Panama's entire economy.",
      true,
    ],
    ["A starfish can turn its stomach inside out.", true],
    ["In 1920, Babe Ruth out-homered every American League team.", true],
    ["Most dust particles in your house are made from dead skin.", true],
    [
      "The Pentagon has twice as many restrooms as necessary. When it was built, segregation was still in place in Virginia, so separate restrooms for blacks and whites were required by law.",
      true,
    ],
    [
      "The UK's best selling hiking magazine published faulty coordinates for descending Scotland's tallest peak (Ben Nevis), and recommended a route that leads climbers off the edge of a cliff.",
      true,
    ],
    [
      "Hostess Twinkies were originally filled with banana filling. The filling was changed during World War II when the United States experienced a banana shortage.",
      true,
    ],
    [
      "Shania Twain is Mark Twain's great-granddaughter. (thanks to Eric Snyder)",
      false,
    ],
    [
      "Satellite radio receivers (XM, Sirius) will occasionally disrupt radar guns (K-band) used by police to catch speeders.",
      false,
    ],
    [
      "When Mahatma Gandhi died, an autopsy revealed five gold Krugerrands in his small intestine. ",
      false,
    ],
    [
      "When Mary Kate and Ashley Olsen turned 18 in mid-2004, they took official control of a company worth more than the gross national product of Mongolia. Their earnings in 2003 topped $1 billion.",
      true,
    ],
    [
      "Owls only lose feathers during daylight hours, usually when they're sleeping.",
      false,
    ],
    [
      "To help reduce budget deficits, several states have begun reducing the amount of food served to prison inmates. In Texas, the number of daily calories served to prisoners was cut by 300, saving the state $6,000,000 per year.",
      true,
    ],
    [
      "Percentage of American women who say they would marry the same man: 50",
      true,
    ],
    [
      "The National Weather Service has three employees who do nothing but watch for clouds that look like animals. ",
      false,
    ],
    ["Abraham Lincoln's dog, Fido, was assassinated too.", true],
    ["It is possible to lead a cow upstairs but not downstairs.", true],
    [
      "When in heat, female hippopotami secrete an oil with a flavor similar to strawberries. Kalahari bushmen use the oil to make flat-bread treats for children. ",
      false,
    ],
    ["Mr. T makes his own jewelry. (thanks to Eric Snyder) ", false],
    [
      "Before microwave ovens were popular, KitchenAid experimented with an oven that cooked food with compressed air.",
      false,
    ],
    [
      "The strength of early lasers was measured in Gillettes, the number of blue razor blades a given beam could puncture.",
      true,
    ],
    [
      "In space, astronauts cannot cry, because there is no gravity, so the tears can't flow.",
      true,
    ],
    ["The National Anthem of Greece has 158 verses.", true],
    ["In the early 1800s, a flush beat a full house in poker.", false],
    ["They have square watermelons in Japan - they stack better.", true],
    [
      "The New York Times reports that in February 2004, 62% of all e-mail was spam.",
      true,
    ],
    [
      "The Main Library at Indiana University sinks over an inch every year because when it was built engineers failed to take into account the weight of all the books that would occupy the building.",
      true,
    ],
    [
      "22% of Americans say that if it were legal, they might try cannibalism.",
      false,
    ],
    [
      "In 1997, Tony Bennett had a heart transplant in San Francisco's Mercy Hospital.",
      false,
    ],
    ["The average American drinks about 600 sodas a year.", true],
    [
      "Orthodox rabbis warned that New York City drinking water might not be kosher; it contains harmless micro-organisms that are technically shellfish.",
      true,
    ],
    ["Chicago is closer to Moscow than it is to Rio de Janeiro.", true],
    [
      "Jim Carrey voted in 2004 at the Beverly Hills City Hall. He had an assistant wait in line for him, however.",
      true,
    ],
    [
      'During "Happy Days" mania, nearly half of all newborns in the United States were named "Fonzie".',
      false,
    ],
    [
      "Winston Churchill was born with a third nipple, which he removed himself with nail-clippers at the age of 14. ",
      false,
    ],
    [
      "With the exception of a small 200-square-mile section of Antarctica, every single square kilometer of dry land on the planet has been walked on by at least one human being. ",
      false,
    ],
    ["North Dakota has never had an earthquake.", true],
    ["As a rule, tall people attract fewer mosquitoes.", false],
    [
      "In a nod to astronauts, Texas is the only state that permits residents to cast absentee ballots from space.",
      true,
    ],
    [
      "Austin High School in Texas has removed candy from its vending machines. Now some enterprising students are earning $200 per week dealing in black market candy.",
      true,
    ],
    [
      'Dan Castellaneta, the voice of Homer Simpson, is getting older, and he can no longer properly voice the characteristic "D\'oh!". From the sixth season of "The Simpsons" to the present, whenever you hear "D\'oh", it\'s either a dub from an episode originally aired in seasons 1-5, or digitally created on a Macintosh computer.',
      false,
    ],
    ["Dolly Parton once lost a Dolly Parton Look-Alike contest.", true],
    [
      'One-A-Day vitamins have tested a "hot-and-spicy" chewable vitamin.',
      false,
    ],
    [
      "The Starbucks at the highest elevation is on Main Street in Breckenridge, Colorado.",
      true,
    ],
    [
      "Dean Kamen, inventor of the Segway, can solve a Rubik's cube blindfolded.",
      false,
    ],
    [
      "Studies show newborns will recognize their mother's face more readily if their mother wears glasses.",
      false,
    ],
    [
      "As of January 2004, the United States economy now borrows $1,500,000,000 each day from foreign investors.",
      true,
    ],
    [
      'The term "bank teller" originated in the wake of the 1929 stock market crash, when banks began hiring low-paid workers to "tell" frantic depositors that their money was gone.',
      false,
    ],
    [
      "The Washington Times newspaper is owned by the Rev. Sun Myung Moon.",
      true,
    ],
    [
      "In Tempe, Arizona, it is illegal to yell 'Yahtzee' in a crowded theater.",
      false,
    ],
    [
      "Since the formula changed in 1998, Silly Putty is 23% less silly.",
      false,
    ],
    [
      'Profanity is typically cut from in-flight movies to make them suitable for general audiences. Fox Searchlight Pictures has substituted "Ashcroft" for "A**hole" in the movie Sideways when dubbed for Aerolineas Argentinas flights.',
      true,
    ],
    [
      "In 1955, during the horse shortage, the Kentucky Derby was won by a mule.",
      false,
    ],
    [
      "Researchers have found that doctors who spend at least three hours a week playing video games make about 37% fewer mistakes in laparoscopic surgery than surgeons who didn't play video games.",
      true,
    ],
    ["It is physically impossible for pigs to look up into the sky.", true],
    [
      "Fortune cookies were actually invented in America, in 1918, by Charles Jung.",
      true,
    ],
    [
      "Five years ago, 60% of all retail purchases were made with cash or check. Now it's 50%. By 2010, 39% of purchases will be made by cash or check.",
      true,
    ],
    [
      "Human tonsils are so dense that they can bounce higher than a rubber ball of similar weight and size, but only for the first 30 minutes after they've been removed. ",
      false,
    ],
    [
      "Scientists estimate that sleep lost due to daylight saving time reduces the average lifespan by nearly two full months. ",
      false,
    ],
    ["George Washington died of a wig infection. ", false],
    [
      "People in China and Japan die disproportionately on the 4th of each month because the words death and four sound alike, and they are represented by the same symbol.",
      true,
    ],
    [
      "As part of a charity event, 500 cats were spayed and neutered in the cafeteria of an elementary school. School was cancelled for days and $10,000 was spent on cleaning and sterilizing the room.",
      true,
    ],
    ["3.9% of all women surveyed say they never wear underwear.", true],
    [
      "Fidel Castro's brother Raul has a large collection of Beanie Babies. ",
      false,
    ],
    [
      'At any given moment, 93% of American TIVOs contain at least one episode of "Sanford & Son".',
      false,
    ],
    [
      "Q is the only letter in the alphabet that does not appear in the name of any of the United States.",
      true,
    ],
    [
      "Tommy Lee Jones and Kim Jong Il were freshman roommates at Harvard.",
      false,
    ],
    [
      "90% of Canada's 31,000,000 citizens live within 100 miles of the U.S. border.",
      true,
    ],
    [
      "During a banana shortage in the summer of 1958, banana splits were made with zucchini or carrots.",
      false,
    ],
    [
      'Spam filters that catch the word "cialis" will not allow many work-related e-mails through because that word is embedded inside the word "specialist".',
      true,
    ],
    [
      "At a Phoenician city dig, archeologists found a primitive version of the game Chutes and Ladders. (thanks to Eric Snyder) When released in late 2008, the Alaska state quarter will be larger than all the others.",
      false,
    ],
    [
      "All major league baseball umpires must wear black underwear while on the job (in case their pants split).",
      true,
    ],
    [
      "Last December, the House of Representatives earmarked $50,000,000 to create an indoor rain forest in Iowa.",
      true,
    ],
    ["The longest human pregnancy on record was 37 months.", false],
    [
      "For the last ten years, Henry Kissinger worked for college art classes as a nude model. ",
      false,
    ],
    ["Orville Wright was the first member of the mile-high club. ", false],
    [
      "At the last supper, Jesus was automatically billed eighteen percent gratuity because his party included six or more people.",
      false,
    ],
    ["After you die, your tongue continues to grow.", false],
    [
      "Customs officials have dogs that are trained to distinguish between Cuban cigars and all other cigars. ",
      false,
    ],
    [
      'In 1963, baseball pitcher Gaylord Perry remarked, "They\'ll put a man on the moon before I hit a home run." On July 20, 1969, a few hours after Neil Armstrong set foot on the moon, Gaylord Perry hit his first (and only) home run.',
      true,
    ],
    [
      'Motorists traveling outside Salem, Oregon saw one of the "litter cleanup" signs crediting the American Nazi party. Marion County officials had no choice but to let that group into the adopt-a-road program. The $500 per sign was picked up by Oregon taxpayers. The Ku Klux Klan is also involved in the adopt-a-road program in the state of Arkansas.',
      true,
    ],
    ["A flamingo can eat only when its head is upside down.", true],
    [
      "The estates of 22 dead celebrities earned over $5 million in 2004. These celebrities include Elvis Presley, Dr. Seuss, Charles Schulz, J.R.R. Tolkien and John Lennon.",
      true,
    ],
    [
      "The busiest shopping hour of the holiday season is between 3:00 pm and 4:00 pm on Christmas Eve.",
      true,
    ],
    ['Fidel Castro once hosted "Saturday Night Live".', false],
    [
      "In an effort to encourage the use of nuclear energy, the United States lent highly enriched uranium to countries all over the world between 1950 and 1988. Enough weapons-grade material to make 1,000 nuclear bombs has still not been returned by such countries as Pakistan, Iran, Israel and South Africa.",
      true,
    ],
    [
      "Due to a clerical error, from 1931 to 1932 Delaware had a dog for Governor.",
      false,
    ],
    ["Antarctica is the only continent without reptiles or snakes.", true],
    [
      "George W. Bush is a member of the mile-high club in Air Force One.",
      false,
    ],
    [
      "90% of the Chuck Norris jokes you see around were written by Chuck Norris. (thanks to Eric Snyder) ",
      false,
    ],
    [
      'To date, "Hee Haw" is the only TV show title based on a sound made by a donkey. ',
      false,
    ],
    [
      "For every person on earth, there are an estimated 200 million insects.",
      true,
    ],
    ["For $25, New York City allows you to name a pothole.", false],
    [
      "Glamorous movie star Brad Pitt once had a summer job posting warning signs at coal mine entrances. ",
      false,
    ],
    ['"Planet of the Apes" is based on a true story.', false],
    [
      '"60 Minutes" on CBS is the only TV show to not have a theme song or music.',
      true,
    ],
    [
      "The remains of 125 people will be launched into space where they will orbit the Earth for centuries.",
      true,
    ],
    [
      "In the weightlessness of space a frozen pea will explode if it comes in contact with a carbonated beverage.",
      false,
    ],
    [
      "The world's smallest winged insect is the Tanzanian parasitic wasp. It's smaller than the eye of a housefly.",
      true,
    ],
    ["Beethoven dipped his head in cold water before he composed.", true],
    [
      "If you make a cow laugh hard enough, milk will come out of its nose. ",
      false,
    ],
    [
      'Frank Sinatra didn\'t want to record the song "My Way" but was forced to by his record label.',
      false,
    ],
    [
      "Now and then Queen Elizabeth lights up a # 10 Downing Street cigar. (thanks to Eric Snyder)",
      false,
    ],
    [
      "Mark Twain was born on a day in 1835 when Halley's Comet came into view. When he died in 1910, Halley's Comet was in view again.",
      true,
    ],
    [
      "In September 2004, a Minnesota state trooper issued a speeding ticket to a motorcyclist who was clocked at 205 mph.",
      true,
    ],
    [
      "China is the world's largest market for BMW's top of the line 760Li. This car sells for $200,000 in China - more than almost all people in China make in a lifetime.",
      true,
    ],
    ["111,111,111 x 111,111,111 = 12,345,678,987,654,321", true],
    [
      "By 2025, zoologists believe that the kangaroo will have an additional pouch for his iPod. ",
      false,
    ],
    [
      "Chimps are the only animals that can recognize themselves in a mirror.",
      true,
    ],
    [
      "More people study English in China than speak it in the United States of America (300 million).",
      true,
    ],
    ["Labrador retrievers dream about bananas. ", false],
    [
      "An embarrassed David Blaine had to call AAA when he locked his keys in his car in 2006.",
      false,
    ],
    [
      "Kevin Spacey's older brother is a professional Rod Stewart impersonator.",
      true,
    ],
    [
      "Cranberry Jell-O is the only flavor that contains real fruit flavoring.",
      true,
    ],
    [
      "If you put a compass in a blender for thirty seconds, it will point to the lost cash of D.B. Cooper. (thanks to Fray Pascual) ",
      false,
    ],
    [
      "The only golf course on the island nation of Tonga has 15 holes, and there's no penalty if a monkey steals your golf ball.",
      false,
    ],
    [
      "Costco is the largest wine retailer in the United States. Annual wine sales are about $700 million.",
      true,
    ],
    [
      "Your ribs move about 5 million times a year, every time you breathe.",
      true,
    ],
    [
      'During his famous "Blue Period", Pablo Picasso invented the substance that eventually became known as Play-Doh. ',
      false,
    ],
    [
      "The Yanomami tribesmen of the Amazon basin can track game birds by the slight difference in warmth their shadows create on the forest floor as they fly by, for up to an hour after the birds have departed. ",
      false,
    ],
    [
      "If the recent U.S. election was held in Canada, John Kerry would have beaten George Bush in a landslide - 64% to 19%.",
      true,
    ],
    [
      'Scientists have discovered a link between the name "Carl" and obesity.',
      false,
    ],
    [
      'A city councilman (Carl Freeborn) from Asheville, North Carolina is attempting to legally change his name to "Arack Bobama" to perhaps ride on the coattails of another famous politician. ',
      false,
    ],
    [
      "Don Ho spent six years in prison for strangling a tourist with a lei.",
      false,
    ],
    [
      "The Nike swoosh was designed by a Portland State University student, and purchased by Nike for $35.",
      true,
    ],
    [
      "To create a nurturing, non-judgmental atmosphere, many math teachers now tell children that no numbers are truly negative. ",
      false,
    ],
    ["King Henry VIII slept with a gigantic axe. ", false],
    ["According to Genesis 1:20-22 the chicken came before the egg.", true],
    [
      "There are an average of 18,000,000 items for sale at any time on EBay.",
      true,
    ],
    [
      "To present a more modern image, Planters has given Mr. Peanut a single contact lens.",
      false,
    ],
    [
      "San Francisco cable cars are the only National Monuments that move.",
      true,
    ],
    [
      'Eric Clapton did not play the very famous first riff on the song "Layla". That was Duane Allman. Clapton comes in later.',
      true,
    ],
    ["The original Fruit of the Loom logo included a turkey leg. ", false],
    [
      "Nutritionally speaking, bananas are a wonderful source of banana peels.",
      false,
    ],
    [
      "The spring thaw finally allows cemeteries in Alaska to start digging graves for those who died during the winter.",
      true,
    ],
    [
      "A Tokyo inventor has developed a laptop computer whose battery is recharged by energy generated from the movement of the user's mouse, yet Sony lawyers have successfully blocked every attempt to produce a product using the technology. ",
      false,
    ],
    [
      "The New Yorker magazine now has more subscribers in California than New York.",
      true,
    ],
    ['In the early drafts of "Moby Dick", Moby Dick was a turtle. ', false],
    [
      "At 5 feet, 9.2 inches, Tim Felder of Provo, Utah holds the Guinness Record for the most average height. ",
      false,
    ],
    [
      "In 2004, Former President George H. W. Bush voted for John Kerry.",
      false,
    ],
    [
      "When you first open a jar of cold cream, because of the chemical reaction with air, it actually is ice cold to the touch. ",
      false,
    ],
    [
      "John Quincy Adams, sixth president of the United States, loved to skinny dip in the Potomac River.",
      true,
    ],
    [
      "The day after President George W. Bush was reelected, Canada's main immigration website had 115,000 visitors. Before Bush's re-election, this site averaged about 20,000 visitors each day.",
      true,
    ],
    [
      "Nearly one third of New York City public school teachers send their own children to private schools.",
      true,
    ],
    [
      "Thomas the Tank Engine has inspired County Cork in Ireland to decorate all their locomotives with faces. ",
      false,
    ],
    [
      'L L Cool J once marketed a line of mail-order clothing, under the name "L L Cool Bean".',
      false,
    ],
    [
      'Tom Selleck is a part owner of a bakery in Hawaii called "Magnum PIe".',
      false,
    ],
    ["Cats can hear ultrasound.", true],
    ["The average person has over 1,460 dreams a year.", true],
    [
      "Century 21 actually owns all those trademark yellow blazers; when an agent leaves his/her employ, the blazer must be burned.",
      false,
    ],
    ["Heinz Catsup leaving the bottle travels at 25 miles per year.", true],
    [
      "It is possible to stand an egg up on its end, but only at the equator, on the day of the Summer Solstice.",
      false,
    ],
    [
      "Everyone knows that staring at a solar eclipse can blind you. But staring at a lunar eclipse can also harm you - the eye is fooled into allowing too much infrared light into the eye, which can result in red-green color blindness.",
      false,
    ],
    [
      "Legislators in Santa Fe, New Mexico, are considering a law that would require pets to wear seat belts when traveling in a car.",
      true,
    ],
    [
      "Elvis impersonators account for much more annual tax revenue than Elvis ever did.",
      false,
    ],
    ["Slugs have 4 noses.", true],
    ["Moisture, not air, causes super glue to dry.", true],
    ["Actor Bill Murray doesn't have a publicist or an agent.", true],
    [
      "La Paz, Bolivia is the world's most fireproof city. At 12,000 feet about sea level, the amount of oxygen in the air barely supports a flame.",
      true,
    ],
    ["It is physically impossible to do an impression of Rich Little.", false],
    ["Pilgrims ate popcorn at the first Thanksgiving dinner.", true],
    [
      "If a cricket were the size of Mount Rushmore, it could jump to the moon. ",
      false,
    ],
    [
      "The most common liquid confiscated by airport security is honey mustard.",
      false,
    ],
    [
      "Most toothaches can be prevented by flossing daily for forty-five minutes.",
      false,
    ],
    [
      "A perfect SAT score is 1600 combined. Bill Gates scored 1590 on his SAT. Paul Allen, Bill's partner in Microsoft, scored a perfect 1600. Bill Cosby scored less than 500 combined.",
      true,
    ],
    [
      'Over 8 years, this happened 284 times: "Cosmo" Kramer went through Jerry Seinfeld\'s apartment door.',
      true,
    ],
    ["Americans on the average eat 18 acres of pizza every day. ", true],
    ["Dogs and cats consume almost $7 billion worth of pet food a year.", true],
    [
      "Aardvarks are allergic to radishes, but only during summer months.",
      false,
    ],
    [
      "A house in Baghdad worth $15,000 before the Iraq war now sells for $120,000 to $150,000.",
      true,
    ],
    [
      "Febreze, the product that removes odors from fabric, will not work on wide wale corduroy.",
      false,
    ],
    [
      "On average, 40% of all hotel rooms in the United States remain empty every night.",
      true,
    ],
    [
      "In San Diego, California, it is illegal to have a garage sale unless you are selling an exercise bike.",
      false,
    ],
    [
      "More than 30% of the world's salt is used to garnish margaritas. ",
      false,
    ],
    [
      "The Pentagon in Washington, D. C. has five sides, five stories, and five acres in the middle.",
      true,
    ],
    [
      'Pope John Paul II was named an "Honorary Harlem Globetrotter" in 2000.',
      true,
    ],
    [
      "Einstein taught that space and time are the same thing. He discovered this when he kept showing up three miles late for meetings.",
      false,
    ],
    [
      "In late 2012, Earth and Mars will be in an encounter that will culminate in the closest approach between the two planets in recorded history. Mars will look as large as the full moon to the naked eye.",
      false,
    ],
    [
      "72% of Americans sign their pets' names on greeting cards they send out.",
      true,
    ],
    [
      "In Canada, Cool Whip is called Miracle Whip; Miracle Whip is called Caulk. ",
      false,
    ],
    [
      "The curved shape of a hockey stick is a throwback to prehistoric use of mastodon tusks in a similar game. ",
      false,
    ],
    ['Pinocchio is Italian for "pine eye".', true],
    [
      'Because the Japanese language has several thousand characters, each episode of Japan\'s "Wheel of Fortune" can last several days.',
      false,
    ],
    ['"El Torito" in English means "The Torito".', false],
    [
      '3,400,000 Americans are considered "Extreme Commuters". These people commute over 90 minutes round trip every day to work.',
      true,
    ],
    ["The State of Florida is bigger than England.", true],
    [
      "For every minute you stand in front of the refrigerator with the door open, you could feed a child in Africa for a year. (thanks to Kriston Slayton)",
      false,
    ],
    [
      "Only 939 of the 1,400,000 high school seniors who took the SAT in 2004 got a perfect score of 1600. Two of them are twin brothers Dillon and Jesse Smith from Long Island, NY.",
      true,
    ],
    [
      "Rosie O'Donnell was recently offered $1,000,000 to pose nude for Playboy.",
      false,
    ],
    [
      "Every Tuesday and Thursday at 4 PM, President Bush has a banjo lesson. ",
      false,
    ],
    ['Toto was paid $125 per week while filming the "Wizard of Oz".', true],
    [
      "As of April 1st, 2007, only 4 Segway scooters have ever been sold.",
      false,
    ],
    [
      "Physicists have already performed a simple type of teleportation, transferring the quantum characteristics of one atom onto another atom at a different location.",
      true,
    ],
    [
      "In the northern hemisphere, water goes down the drain clockwise. In the southern hemisphere - counterclockwise. On the equator, water flows both ways, depending on the moon's phases. ",
      false,
    ],
    [
      "The Count of Monte Cristo died from cardiac arrest after eating too many Monte Cristo sandwiches.",
      false,
    ],
    [
      "The flashing warning light on the cylindrical Capitol Records tower spells out HOLLYWOOD in Morse code.",
      true,
    ],
    ["Illinois has the most personalized license plates of any state.", true],
    ["Honeybees have hair on their eyes.", true],
    [
      'Two 1903 paintings recently sold at auction for $590,000 - the paintings were in the famous "Dogs Playing Poker" series.',
      true,
    ],
    ["Singer Cat Stevens is allergic to cats.", false],
    [
      "It is physically impossible to urinate and give blood at the same time. ",
      false,
    ],
    ["The 11th president, James K. Polk, did not speak English.", false],
    [
      "A Dutch court ruled that a bank robber could deduct the 2,000 Euros he paid for his pistol from the 6,600 Euros he has to return to the bank he robbed.",
      true,
    ],
    ["The Dalai Lama's birth name is Doug Reynolds, Jr. ", false],
    [
      "George W. Bush and John Kerry are 16th cousins, three times removed.",
      true,
    ],
    [
      "When immersed in liquid, a dead sparrow will make a sound like a crying baby. ",
      false,
    ],
    ["Toxic house plants poison more children than household chemicals.", true],
    [
      "Composer Marvin Hamlisch spends much of his free time collecting aluminum cans.",
      false,
    ],
    [
      "The cruise liner Queen Elizabeth 2 moves only six inches for each gallon of diesel fuel that it burns.",
      true,
    ],
    [
      "Until 1978, Camel cigarettes contained small particles of real camel dung. ",
      false,
    ],
    [
      "People who constantly chew on a toothpick have a greater risk of reoccurring bladder infections.",
      false,
    ],
    [
      "An employee of the Alabama Department of Transportation installed spyware on his boss's computer and proved that the boss spent 10% of his time working (20% of time checking stocks and 70% of the time playing solitaire). The employee was fired, the boss kept his job.",
      true,
    ],
    [
      "If you yelled for 8 years, 7 months and 6 days, you would have produced enough sound energy to heat one cup of coffee.",
      true,
    ],
    ["There are two credit cards for every person in the United States.", true],
    [
      "In Norway, pickled herring is a separate food group. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "The average vending machine candy bar is four-and-a-half years old. ",
      false,
    ],
    ["Mr. Rogers was a sniper in the Vietnam war.", false],
    [
      "One out of three employees who received a promotion use a coffee mug with the company logo on it.",
      true,
    ],
    ["Armadillos can be housebroken.", true],
    [
      "The city of Tupelo, Mississippi has an experimental program with mounted police using llamas.",
      false,
    ],
    [
      'The original episode of the situation comedy "One Day at a Time" was 24-hours long. ',
      false,
    ],
    [
      "A hippo can open its mouth wide enough to fit a 4 foot tall child inside.",
      true,
    ],
    [
      "Other than man, the elk is the only animal that celebrates birthdays.",
      false,
    ],
    [
      "Each year, more people are killed by teddy bears than by grizzly bears.",
      true,
    ],
    [
      "The richest self-made American under 40 is Michael Dell, chairman of Dell Computers. He is worth $18 billion.",
      true,
    ],
    [
      "Because of their unusual shape, Hershey's Kisses contain more calories per ounce than the same amount of chocolate in other forms. ",
      false,
    ],
    [
      "The average American will eat about 11.9 pounds of cereal per year.",
      true,
    ],
    ["The world's oldest piece of chewing gum is 9000 years old.", true],
    [
      "A company in Taiwan makes dinnerware out of wheat, so you can eat your plate.",
      true,
    ],
    ["Al Capone's business card said he was a used furniture dealer.", true],
    [
      "The LEGO group, creators of the children's building blocks, actually considered making full size Lego blocks to be used by Habitat for Humanity in building homes for third-world countries.",
      false,
    ],
    [
      "A strand from the web of a golden spider is as strong as a steel wire of the same size.",
      true,
    ],
    ["There are 1,008 McDonald's franchises in France.", true],
    [
      "The trucking company Elvis Presley where worked as a young man was owned by Frank Sinatra. ",
      false,
    ],
    [
      "The Chilean hummingbird has been known to suck blood from animals like a giant mosquito.",
      false,
    ],
    ["Rachael Ray is a convicted felon.", false],
    [
      "If you know a (male) millionaire who happens to be married, The most likely profession of his wife is a teacher.",
      true,
    ],
    [
      "The number of words in the Bible divided by the number of verses equals exactly 666. ",
      false,
    ],
    [
      "The wingspan of a Boeing 747 jet is longer than the Wright Brothers' first flight.",
      true,
    ],
    ["The most common street name in America is 13th Street.", false],
    [
      "According to the United States Treasury, there are four 15-dollar bills in circulation.",
      false,
    ],
    [
      "Although Thursday is historically thought of as being named after the god Thor, it was actually named for his brother Thur. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Erosion at the base of Niagara Falls (USA) undermines the shale cliffs and as a result, the falls have receded approximately 7 miles over the last 10,000 years.",
      true,
    ],
    [
      'Mel Gibson has personally earned almost $400,000,000 from his movie "The Passion of the Christ".',
      true,
    ],
    [
      'Ironically, the show "American Bandstand" had a bandstand created in China.',
      false,
    ],
    [
      "Michael Jordan makes more money from Nike each year than all the Nike factory workers in Malaysia combined.",
      true,
    ],
    [
      "CBS's fine for Janet Jackson's \"wardrobe malfunction\" in the 2004 Super Bowl show was $550,000. This could be paid with only 7.5 seconds of commercial time during the same Super Bowl telecast.",
      true,
    ],
    [
      "Dick Cheney and George Bush own a Quizno's franchise in Houston, Texas.",
      false,
    ],
    ["Proportional to their weight, men are stronger than horses.", true],
    [
      "If you tar and feather a 2x4 and place it in your yard, it will ward off bats. ",
      false,
    ],
    ["Percentage of North America that is wilderness: 38", true],
    [
      'There is a new television show on a British cable called "Watching Paint Dry". Viewers watch in real-time. Gloss, semi-gloss, matte, satin, you name it. Then viewers vote out their least favorite.',
      true,
    ],
    [
      "Homing pigeons use roads where possible to help find their way home. In fact, some pigeons followed roads so closely that they actually flew around traffic circles before choosing the exit that led them home.",
      true,
    ],
    ["Winston Churchill was born in a ladies' room during a dance.", true],
    [
      "The California Department of Motor Vehicles has issued six driver's licenses to six different people named Jesus Christ.",
      true,
    ],
    ["Cats really do land on their feet, except when they're in heat.", false],
    [
      "Archeologists have found evidence in the Middle East that in the Stone Age, mankind had developed a primitive Swiffer.",
      false,
    ],
    [
      "30% of women who apply makeup while driving have accidentally swallowed a tube of lipstick.",
      false,
    ],
    [
      "About a third of all Americans flush the toilet while they're still sitting on it.",
      true,
    ],
    [
      "There is an ATM at McMurdo Station in Antarctica, which has a winter population of 200.",
      true,
    ],
    [
      "The first FAX machine was patented in 1843, 33 years before Alexander Graham Bell demonstrated the telephone.",
      true,
    ],
    [
      "Only 5 percent of the ocean floor has been mapped in as much detail as the surface of Mars.",
      true,
    ],
    [
      "If you part your hair on the right side, you were born to be carnivorous. If you part it on the left, your physical and psychological make-up is that of a vegetarian. ",
      false,
    ],
    [
      "After he resigned from the Presidency, Richard Nixon could often be found on the beaches of San Clemente, with his ever-present metal detector.",
      false,
    ],
    [
      "40% of people who believe the moon landing was faked also believe the moon isn't real.",
      false,
    ],
    [
      "1 pound of lemons contain more sugar than 1 pound of strawberries.",
      true,
    ],
    [
      "Due to his constant name changes, Diddy hasn't received mail since 1977.",
      false,
    ],
    [
      "A chef's hat is shaped the way it is for a reason: its shape allows air to circulate around the scalp, keeping the head cool in a hot kitchen.",
      true,
    ],
    ["1.5 million Americans are charged with drunk driving each year.", true],
    [
      "U.K. telecom provider Telewest Broadband is testing a device that hooks to your PC and wafts a scent when certain e-mails arrive.",
      true,
    ],
    [
      "Fewer divorces occur in families in which the children wake their parents before 6 a.m. on Saturdays. ",
      false,
    ],
    ["Percentage of women who say they are happier: 85", true],
    [
      "An estimated 800,000 senior citizens voluntarily give up their driving privileges each year. The average age at which they surrender the wheel is 85.",
      true,
    ],
    [
      "Thomas Edison, among his many other inventions, also invented break dancing.  (thanks to Eric Snyder) ",
      false,
    ],
    [
      "The first prototype defibrillators delivered 1,200 joules of electrical energy instead of the now standard 360, occasionally causing dead bodies to sit upright momentarily as though they were still alive.",
      false,
    ],
    [
      "McDonald's restaurants will buy 54,000,000 pounds of fresh apples this year. Two years ago, McDonald's purchased 0 pounds of apples. This is attributed to the shift to more healthy menu options (the Apple Pie, which has been at McDonald's for years uses processed Apple Pie Filling).",
      true,
    ],
    [
      "In America, motorists drive on the right side of the road. In the UK, motorists drive on the left side of the road. In Norway, they drive in the middle.",
      false,
    ],
    ["Maine is the only state whose name is just one syllable.", true],
    [
      "Only 14% of Americans say they've skinny dipped with the opposite sex.",
      true,
    ],
    [
      'Two original members of the musical group "Three Dog Night" died after eating tainted pet food.',
      false,
    ],
    ["Albert Einstein never knew how to drive a car.", true],
    ["Only 3% of American homes are equipped with a telegraph. ", false],
    [
      "No one in Pontiac, Michigan owns a Pontiac car. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "BMW is developing a side-view mirror in which objects may be farther away than they appear.",
      false,
    ],
    [
      'In 1965, auditions were held for the "Monkees" TV show. Some of the people who responded (but were not hired) were Stephen Stills, Harry Nilsson, Paul Williams and Charles Manson.',
      true,
    ],
    [
      "Talk show host Tom Snyder died while mowing neighbors' lawns for extra cash.",
      false,
    ],
    [
      'Paul Marcarelli, an actor from New York City, plays the "can you hear me now guy" for Verizon Wireless. He actually has cell phone service with T-Mobile as Verizon does not have adequate coverage in his home area of Queens.',
      false,
    ],
    [
      "The egg of a hummingbird will actually float in mid-air in foggy conditions.",
      false,
    ],
    [
      'All radios in North Korea have been rigged so listeners can only receive a North Korean government station. The United States recently announced plans to smuggle $2,000,000 worth of small radios into the country so North Koreans can get a taste of (what their government calls) "rotten imperialist reactionary culture".',
      true,
    ],
    [
      "The top three names for female babies born in China last year were Huan, Jia, and Tiffany. ",
      false,
    ],
    ["A hummingbird weighs less than a penny.", true],
    [
      "The universal size of the credit card is based entirely on the size of the 1960s US Communist Party membership card. Credit cards were designed so that they wouldn't cause the Communist Party card to stand out. ",
      false,
    ],
    [
      "Rubbing Tabasco on one's upper lip before bedtime is an effective temporary cure for sleep apnea. ",
      false,
    ],
    [
      'None of the actors who play characters on the television show "All My Children" have children.',
      false,
    ],
    [
      "Billboard magazine has recently launched a top 20 chart of cell phone ringtones.",
      true,
    ],
    [
      "The original plans for the Statue of Liberty called for the statue to wave but France did not want to spend the money. ",
      false,
    ],
    [
      "Ballpoint pens were invented by a Michigan scientist attempting to reduce the number of birds killed for their quills. ",
      false,
    ],
    [
      "Broadway's Nathan Lane actually lives on Nathan Lane in East Hampton, New York.",
      false,
    ],
    [
      "Never hold your nose and cover your mouth when sneezing, as it can blow out your eyeballs. ",
      false,
    ],
    [
      "Jeffrey Dahmer used Presto's Fry Daddy to dispose of his father's remains.",
      false,
    ],
    [
      "An iceberg the size of Long Island, New York, has broken off Antarctica and has blocked sea lanes used by both ships and penguins.",
      true,
    ],
    [
      "By law, all globes in Australia are displayed upside down. (thanks to Eric Snyder) ",
      false,
    ],
    [
      "The Mongolian pony is the only animal other than an elephant capable of fending off an attack by a healthy adult tiger. ",
      false,
    ],
    [
      "In 1950, President Harry Truman threw out the first ball twice at the opening day Washington DC baseball game; once right handed and once left handed.",
      true,
    ],
    [
      "The Internal Revenue Service audits 87 percent of women who claim breast implants as tax deductions. ",
      false,
    ],
    [
      "George W. Bush has negotiated with the governor of South Dakota to get his face added to Mount Rushmore. Construction is scheduled to start in 2012. ",
      false,
    ],
    [
      "Fire escapes, windshield wipers and laser printers were all invented by women.",
      true,
    ],
    ["There are no venomous snakes in Maine.", true],
    [
      'In order to become licensed, a courtroom sketch artist must demonstrate the ability to make defendants look "shifty". ',
      false,
    ],
    [
      "The IRS admits that one in five people who call their help line get the wrong answer to their question.",
      true,
    ],
    [
      "Gerald Ford is the only United States president to have walked on the moon. ",
      false,
    ],
    [
      "The winter of 1932 was so cold that Niagara Falls froze completely solid.",
      true,
    ],
    ["The leg bones of a bat are so thin that no bat can walk.", true],
    [
      "Harry S Truman's middle name was S. Just S, without the period. (thanks to Eric Snyder)",
      true,
    ],
    [
      "In 2015, it is estimated that half the federal budget will be spent on programs for the elderly.",
      true,
    ],
    [
      'Officially, if you say "Have a nice day" to someone after 5 PM, it refers to the next day.',
      false,
    ],
    [
      "The prison system is the largest supplier of mental health services in America, with 250,000 Americans with mental illness living there.",
      true,
    ],
    [
      "More people than you would imagine accidentally swallow their keys.",
      false,
    ],
    ["Every 23 seconds, someone is having sex in a carpet store. ", false],
    [
      "The New York City Police Department has a $3.3 billion annual budget, larger than all but 19 of the world's armies.",
      true,
    ],
    ["Baby robins eat 14 feet of earthworms every day.", true],
    [
      "Every common food product, with the exception of fish, contains some traces of peanuts. ",
      false,
    ],
    [
      '"Hello Kitty" began as part of a covert propaganda campaign originally proposed by Prime Minister Tojo during World War II. ',
      false,
    ],
    [
      "The Weddell seal can travel underwater for seven miles without surfacing for air.",
      true,
    ],
    ["Larry King wears suspenders in the shower.", false],
    [
      "Osama Bin Laden has ordered fleece jackets with the Al Qaeda logo.",
      false,
    ],
    [
      "Anyone convicted of animal cruelty in Sedalia, Missouri, is sentenced to a month's confinement in the county animal shelter. ",
      false,
    ],
    ["61,000 people are airborne over the US at any given time.", true],
    [
      'Due to a misprint, some Gideon Bibles list "the Gospel according to Mark" as "the Gospel according to Marv". ',
      false,
    ],
    [
      "President George W. Bush has locked himself out of the Oval Office fifteen times in his presidency.",
      false,
    ],
    [
      "Chances that a burglary in the United States will be solved: 1 in 7",
      true,
    ],
    [
      "From 1970 through 1972, the penny actually showed Abraham Lincoln with a mustache but no beard.",
      false,
    ],
    ["Shaquille O'Neal was conceived in a Radio Shack. ", false],
    ["In the Caribbean there are oysters that can climb trees.", true],
    [
      "Two-thirds of all the world's coriander comes from a single valley in Italy. ",
      false,
    ],
    ["No one named Tony has ever won a Tony Award.", false],
    [
      "The largest home in the United States, North Carolina's Biltmore House, was originally intended to be the official residence of a new monarchy to be established when the South rose again. ",
      false,
    ],
    ["Albert Einstein was an avid bodybuilder.", false],
    ['The dot that appears over the letter "i" is called a tittle.', true],
    [
      "Double-yolk eggs, while larger than normal hen's eggs, actually have less nutritional value per ounce, but take about half as long to cook.",
      false,
    ],
    [
      "Hillary Clinton has a CD of old standard love songs coming out in late 2008, just in time for the election.",
      false,
    ],
    [
      "Every year in the fall, Niagara Falls is shut down for maintenance for 24 hours. The flow is diverted using a massive series of pipes and spigots built for this purpose in 1837. ",
      false,
    ],
    [
      "A Brussels Airlines flight to Vienna was aborted because the pilot was attacked in the cockpit. The attacker was a passenger's cat, who got out of its travel bag.",
      true,
    ],
    [
      "Two very popular and common objects have the same function, but one has thousands of moving parts, while the other has absolutely no moving parts - an hourglass and a sundial.",
      true,
    ],
    [
      'Richard Versalle, a tenor performing at New York\'s Metropolitan Opera House, suffered a heart attack and fell 10 feet from a ladder to the stage just after singing the line "You can only live so long."',
      true,
    ],
    [
      "The drive-through line on opening day at the McDonald's restaurant in Kuwait City, Kuwait was at times seven miles long.",
      true,
    ],
    ["A Boeing 767 airliner is made of 3,100,000 separate parts.", true],
    [
      "If you place a fresh Viagra tablet in a houseplant's soil every six months, the plant will not wilt.  ",
      false,
    ],
    [
      "The typical American child receives 70 new toys a year, most of them during the holiday season.",
      true,
    ],
    ["Ted Turner owns 5% of New Mexico.", true],
    [
      "If the Earth was put on a scale, scientists would be puzzled by the presence of that scale.",
      false,
    ],
    ["All of Queen Anne's 17 children died before she did.", true],
    [
      "Ingesting small doses of ink over an extended period of time will change your eye color slightly. ",
      false,
    ],
    [
      'Jim Gordon, drummer of Derek and the Dominos ("Layla"), killed his mother with a claw hammer.',
      true,
    ],
    [
      "The Olympic flag's colors are always red, black, blue, green and yellow rings on a field of white. This is because at least one of those colors appears on the flag of every nation on the planet.",
      true,
    ],
    [
      "There are more cars in Southern California than there are cows in India.",
      true,
    ],
    [
      "SUV sales are up 18% in the first quarter of 2004 vs. the same period of 2003, even though gas prices are skyrocketing. Consumer surveys show that gas prices would have to hit $3.75 per gallon before there will be any real impact on SUV sales.",
      true,
    ],
    [
      "Fast food provider Hardee's has recently introduced the Monster Thickburger. It has 1,420 calories and 107 grams of fat.",
      true,
    ],
    ["The Eiffel Tower shrinks 6 inches in winter.", true],
    [
      "Nolan Ryan once threw a fastball so hard it killed both the catcher and the umpire.",
      false,
    ],
    [
      "Only a single dissenting vote prevented the death penalty in Texas from being carried out by immersing the convicted person in a nest of fire ants. ",
      false,
    ],
    ["The most common name in the world is Mohammed.", true],
    [
      "Silica gel, when mixed in with asphalt, makes highways that actually absorb rainfall. A side effect is that automobile tires would last two to three times as long when used on this type pavement. The tire industry has fought this breakthrough.",
      false,
    ],
    [
      "In the early 1900s, a dozen actually was a measurement based on weight. Only in 1933 did the Department of Weights and Measures come up with an item count of twelve as a definition. ",
      false,
    ],
    [
      'A Wisconsin man was beaten by an angry mob because he asked for "no cheese" on his Whopper.',
      false,
    ],
    [
      "In all three Godfather films, when you see oranges, there is a death (or a very close call) coming up soon.",
      true,
    ],
    [
      "After breaking his promise not to raise taxes, George H. W. Bush used some of the money to buy a Donkey Kong machine for the White House. ",
      false,
    ],
    [
      'The father of the famous murderer "Son of Sam" actually was named Percy.',
      false,
    ],
    [
      'Before he had his own show, Jerry Seinfeld appeared on three episodes of the TV show "Benson" as the governor\'s speechwriter.',
      true,
    ],
    [
      "Pope John Paul II is the world's Scrabble champion in the over-70 category.",
      true,
    ],
    [
      "In ancient Greece, children of wealthy families were dipped in olive oil at birth to keep them hairless throughout their lives. ",
      false,
    ],
    ["Moths are unable to fly during an earthquake. ", false],
    [
      "Because of an onion allergy, the singer Meatloaf can't eat meatloaf.",
      false,
    ],
    [
      "40% of all people who come to a party in your home snoop in your medicine cabinet.",
      true,
    ],
    ["A mole can dig a tunnel 300 feet long in just one night.", true],
    [
      "More people are killed by donkeys annually than are killed in plane crashes.",
      true,
    ],
    [
      "Each year, 48 customers are accidentally electrocuted at a Circuit City. ",
      false,
    ],
    ["There are 2,000,000 millionaires in the United States.", true],
    [
      'The lead role for the movie "Gandhi" originally was offered to Burt Reynolds.',
      false,
    ],
    [
      "There are between 5,000 and 7,000 tigers kept as pets in the United States.",
      true,
    ],
    ["Oprah Winfrey and Elvis Presley are distant cousins.", true],
    [
      "The rhesus monkey is the only animal that can be taught to hum a tune. ",
      false,
    ],
    [
      "More Americans choke to death on bathmats than die in auto accidents.",
      false,
    ],
    [
      "The first item ever patented at the United States Patent Office was the patent application form. ",
      false,
    ],
    ["Mel Blanc (voice of Bugs Bunny) was allergic to carrots.", true],
    ["An ostrich's eye is bigger than its brain.", true],
    [
      "The worst air polluter in the entire state of Washington is Mount St. Helens.",
      true,
    ],
    ['There once was a town named "6" in West Virginia.', true],
    [
      'To thank the French for the Statue of Liberty, in early caricatures of "Uncle Sam", he always wore a beret (instead of the trademark stovepipe hat).',
      false,
    ],
    [
      "Former British Prime Minister Margaret Thatcher helped invent soft-serve ice cream.",
      false,
    ],
    [
      "The United States has five percent of the world's population, but twenty-five percent of the world's prison population.",
      true,
    ],
    [
      "During Bill Clinton's entire eight year presidency, he only sent two e-mails. One was to John Glenn when he was aboard the space shuttle, and the other was a test of the e-mail system.",
      true,
    ],
    [
      "Adding baking soda and vinegar will make your scrambled eggs fluffier. ",
      false,
    ],
    ["A snail can also sleep for three years.", true],
    [
      "The blue whale can produce sounds up to 188 decibels. This is the loudest sound produced by a living animal and has been detected as far away as 530 miles.",
      true,
    ],
    ["Barbara Walters was once arrested for playing golf naked. ", false],
    [
      "Truth or Consequences, New Mexico is one of two United States towns named after a game show. The other is Password, Nevada. ",
      false,
    ],
    [
      "According to a recently found artifact, it appears that Mary and Joseph's second choice for a name was Larry.  (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Only 30% of stolen artwork worth more than $1,000,000 each is recovered.",
      true,
    ],
    [
      "Three out of ten doctors admit to licking the tongue depressors before using them. ",
      false,
    ],
    ["The CNN Christmas party is held at Denny's.", false],
    [
      "Although difficult, it's possible to start a fire by rapidly rubbing together two Cool Ranch Doritos. ",
      false,
    ],
    [
      "In 1984, an Ohio family visiting New York City stood at a broken DON'T WALK sign for three days.",
      false,
    ],
    [
      "The company that manufactures the greatest number of women's dresses each year is Mattel. Barbie's got to wear something.",
      true,
    ],
    ["Percentage of bird species that are monogamous: 90", true],
    ["Larry Bird has never eaten chicken. (thanks to Eric Snyder) ", false],
    [
      'The first movie that had sound was a documentary on "The History of Gallaudet University". (thanks to Tim Garcia)',
      false,
    ],
    ["Penguins can smell toothpaste from several miles away.", false],
    ["John Madden is an accomplished ballroom dancer.", true],
    [
      "In a recent survey, Americans revealed that banana was their favorite smell.",
      true,
    ],
    [
      "Levi-Strauss lost millions when they marketed a line of blue jeans for horses. ",
      false,
    ],
    [
      'Queen Elizabeth has seen the movie "Spaceballs" at least twelve times.',
      false,
    ],
    [
      "To prepare for her studies with gorillas, Jane Goodall spent two years living in a Best Buy Electronics Store appliance section.",
      false,
    ],
    [
      "The number of US college students studying Latin is three times the number studying Arabic.",
      true,
    ],
    [
      "Oslo, Norway is the world's most expensive city. A gallon on gas costs almost $5, and it costs $1.32 to use the public restrooms.",
      true,
    ],
    [
      'There are seven words in Tagalog that mean "wet". (thanks to Eric Snyder) ',
      false,
    ],
    [
      "There are only three types of snakes on the island of Tasmania and all three are deadly poisonous.",
      true,
    ],
    [
      "65% of all automobile accidents take place within five miles of an Arby's restaurant.",
      false,
    ],
    ["The K in K-Mart stands for K-Mart.", false],
    [
      'Contestants on the reality show "Survivor" quietly receive a case of Quaker granola bars to eat if they\'re really hungry.',
      false,
    ],
    [
      'The only English words ending in the letters "mt" are dreamt and flemt.',
      false,
    ],
    [
      "Jennifer Aniston's first acting job was in a Rice Krispies commercial. The commercial never aired because the actress quickly had welts all over her body due to an allergic reaction.",
      false,
    ],
    [
      "4 out of 5 men have gotten their arm stuck in a vending machine. ",
      false,
    ],
    [
      'The Hyundai Elantra is China\'s best selling car, but "Elantra" in some dialects of Mandarin Chinese means "Violation", so the car is actually named "Guana".',
      false,
    ],
    [
      'The word spelled most incorrectly in regional middle-school spelling bees is "status".',
      false,
    ],
    ["Edward R. Murrow's middle name was Rhonda.", false],
    [
      "The original Mickey Mouse cartoon was in the Mouse language, with English subtitles.",
      false,
    ],
    [
      "Every United States President with a beard has been a Republican. ",
      false,
    ],
    [
      "In the film Forrest Gump, all the still photos show Forrest with his eyes closed.",
      true,
    ],
    [
      "Sheep ranchers counting the number of animals in their herd often doze off.",
      false,
    ],
    ["Police lineups always put the guilty guy in the middle.", false],
    ["More people use blue toothbrushes than red ones.", true],
    [
      'It is believed that Shakespeare was 46 around the time that the King James Version of the Bible was written. In Psalms 46, the 46th word from the first word is "shake" and the 46th word from the last word is "spear".',
      true,
    ],
    [
      "There is a bar in London that sells vaporized vodka, which is inhaled instead of sipped.",
      true,
    ],
    [
      'Socrates is thought to be the first to use the phrase "a bad case of the Mondays".',
      false,
    ],
    [
      "Leonardo da Vinci drew up plans for the first novelty set of chattering teeth. ",
      false,
    ],
    [
      'Scientists predict that in late 2008 the television show "Mythbusters" will run out of myths.',
      false,
    ],
    [
      "Alan Shepard was the only astronaut to leave his wallet on the moon.",
      false,
    ],
    [
      "In 2003, there were 86 days of below-freezing weather in Hell, Michigan.",
      true,
    ],
    ['All of the clocks in the movie "Pulp Fiction" read 4:20.', true],
    [
      "There are 40,000 New York City cab drivers, who collectively drive more than a million miles each day.",
      true,
    ],
    [
      'The lead singer of The Knack, famous for "My Sharona," and Jack Kevorkian\'s lead defense attorney are brothers, Doug and Jeffrey Feiger.',
      true,
    ],
    ["All polar bears are left handed.", true],
    ["Pat Sajak can't read.", false],
    [
      'To research his role in "Tootsie", Dustin Hoffman spent two years living as a woman. ',
      false,
    ],
    [
      "Mailmen in Russia now carry revolvers after a recent decision by the government.",
      true,
    ],
    [
      'At the height of "Star Wars" mania, Jimmy Carter gave an oval office address in a Chewbacca costume. ',
      false,
    ],
    [
      "Gillette spent $1,000,000 to place razor samples in the welcome bags handed out at the Democratic National Convention, only to have them confiscated as they were considered a threat. This caused huge delays at all security checkpoints.",
      true,
    ],
    ['Bob Saget lives in the old set of "Full House".', false],
    [
      "In a 1996 phone book, AT&T; accidentally listed a Pizza Hut in Iowa with the phone number of a funeral home in Dallas, Texas.",
      false,
    ],
    [
      "Even today, 90% of the continental United States is still open space or farmland.",
      true,
    ],
    [
      "Former keyboard player for Jethro Tull David Palmer is now a woman named Dee Palmer. He waited until his wife died before going through with his longtime desire for a sex change.",
      true,
    ],
    [
      "The largest McDonald's is in Beijing, China - measuring 28,000 square feet. It has twenty nine cash registers.",
      true,
    ],
    [
      "About 3000 years ago, most Egyptians died by the time they were 30.",
      true,
    ],
    ["An eagle can kill a young deer and fly away with it.", true],
    ["George Washington spent about 7% of his annual salary on liquor.", true],
    ["Ancient Egyptians slept on pillows made of stone.", true],
    [
      "Recycling one glass jar saves enough energy to watch TV for 3 hours.",
      true,
    ],
    [
      "Beethoven wasn't really deaf, but only pretended to be deaf when his mother-in-law was around.",
      false,
    ],
    ['Ted Williams\' last words: "I was kidding about being frozen";.', false],
    [
      'Calvin, of the "Calvin and Hobbes" comic strip, was patterned after President Calvin Coolidge, who had a pet tiger as a boy. ',
      false,
    ],
    [
      "The only member of the band ZZ Top without a beard has the last name Beard.",
      true,
    ],
    ["The earliest rocking chairs only rocked forward. ", false],
    [
      "Every day more money is printed for Monopoly than for the US Treasury.",
      true,
    ],
    ["Half and half is actually closer to 60-40.", false],
    ["Molecularly speaking, water is actually much drier than sand. ", false],
    [
      "The leading cause of on-the-job deaths in workplaces in America is homicide.",
      true,
    ],
    [
      "The Army Corps of Engineers has spent millions of dollars trying to cross a bridge before they come to it. ",
      false,
    ],
    [
      "The Chicago Cubs are suing former Hartford Courant newspaper carrier Mark Guthrie to get back $301,000 in pay that was intended to go to a Cubs pitcher with the same name. The Tribune Company owns both the Hartford Courant and the Chicago Cubs.",
      true,
    ],
    [
      "Experts predict that by 2009, every television commercial will feature Peyton Manning.",
      false,
    ],
    [
      "President Harry S. Truman would often go on vacation and secretly have his identical twin Larry run the country.",
      false,
    ],
    [
      "If you stretch a standard Slinky out flat it measures 87 feet long.",
      true,
    ],
    [
      "Atlanta Falcon star Michael Vick got involved in dogfighting because cockfighting wasn't what he thought it was.",
      false,
    ],
    ["The average American adult weighs 250 pounds.", false],
    [
      "In 2002, women earned 742,000 bachelor's degrees. Men earned only 550,000 during the same year. The difference is growing so large that many colleges now practice (quietly) affirmative action for male applicants.",
      true,
    ],
    [
      "Surprisingly, famous astronomer Carl Sagan couldn't count to 100.  (thanks to Eric Snyder) ",
      false,
    ],
    [
      "Quebec City, Canada, has about as much street crime as Disney World.",
      true,
    ],
    [
      'Dogs have two sets of teeth, just like humans. They first have 30 "puppy" teeth, then 42 adult teeth.',
      true,
    ],
    [
      "If all Americans used one third less ice in their drinks the United States would become a net exporter instead of an importer of energy.",
      true,
    ],
    ["Hawaii is moving toward Japan 4 inches every year.", true],
    [
      "The time spent deleting SPAM costs United States businesses $21.6 billion annually.",
      true,
    ],
    [
      "Watching an hour-long soap opera burns more calories than watching a three-hour baseball game. ",
      false,
    ],
    ["Donald Trump's hair has its own zip code.", false],
    [
      "The volume of water that the Giant Sequoia tree consumes in a 24-hour period contains enough suspended minerals to pave 16 feet of a 4-lane concrete freeway. ",
      false,
    ],
    [
      "You are more likely to be charged by a rhino than to be pulled over for not wearing your seatbelt. ",
      false,
    ],
    [
      "Fleas can jump 130 times higher than their own height. In human terms this is equal to a 6 foot person jumping 780 feet into the air.",
      true,
    ],
    [
      "In 1998, more fast-food employees were murdered on the job than police officers.",
      true,
    ],
    [
      "Percentage of American men who say they would marry the same woman if they had it to do all over again: 80",
      true,
    ],
    [
      "Vice President Dick Cheney is an accomplished studio musician, and has played trumpet and woodwinds for the likes of Tony Bennett, Frank Sinatra and (most recently) Paul Anka.",
      false,
    ],
    [
      'In the original plot of "NYPD Blue", Sipowitz was killed while stopping five losers trying to rob Mick Jagger.',
      false,
    ],
    [
      "A Costa Rican worker who makes baseballs earns about $2,750 annually. The average American pro baseball player earns $2,377,000 per year.",
      true,
    ],
    [
      "Point Roberts in Washington State is cut off from the rest of the state by British Columbia, Canada. If you wish to travel from Point Roberts to the rest of the state or vice versa, you must pass through Canada, including both Canadian and U.S. customs.",
      true,
    ],
    [
      "Replying more than 100 times to the same piece of spam e-mail will overwhelm the sender's system and interfere with their ability to send any more spam. ",
      false,
    ],
    [
      "The microwave oven was invented by mistake when an engineer testing a magnetron tube noticed that the radiation from it melted the chocolate bar he had in his pocket.",
      true,
    ],
    ["John Wayne's real name was Lydia Schiffman.", false],
    [
      "During the height of the hula-hoop craze, manufacturer Wham-O was making 20 each and every day.",
      false,
    ],
    ["In 2018, the month of February will not have a full moon.", true],
    ["Time Magazine's 1951 Man of the Year was Moe.", false],
    ["In Tokyo, they sell toupees for dogs.", true],
    ["The videogame Donkey Kong is based on a true story.", false],
    [
      "A 9-volt battery contains roughly the same amount of kinetic energy as a bowl of Lucky Charms. ",
      false,
    ],
    [
      "Babe Ruth wore a cabbage leaf under his cap to keep him cool. He changed it every 2 innings.",
      true,
    ],
    ["There wasn't a single pony in the Pony Express, just horses.", true],
    [
      "Microsoft threatened 17 year old Mike Rowe with a lawsuit after the young man launched a website named MikeRoweSoft.com. ",
      true,
    ],
    [
      "The Hoover Dam was built to last 2,000 years. Its concrete will not be fully cured for another 500 years.",
      true,
    ],
    [
      "Male ladybugs always have an odd number of spots, and one spot will always be white.",
      false,
    ],
    [
      'Christopher Columbus actually had four ships: Nina, Pinta, Santa Maria and "Life\'s a Beach".',
      false,
    ],
    [
      "The treasury department has more than twenty people assigned to catching people who violate the trade and tourism embargo with Cuba. In contrast, it has only four employees assigned to track the assets of Osama bin Laden and Saddam Hussein.",
      true,
    ],
    [
      'The world\'s largest book, "Bhutan: A Visual Odyssey" is in a Chicago public library. The book measures 5 feet tall by 7 feet wide when open. It weighs 133 pounds.',
      true,
    ],
    [
      "The entire fleet of Unicoi County Tennessee's salt trucks was rendered out of commission in one accident. All three trucks were badly damaged when one of them began skidding down a road, causing a chain reaction accident. Officials blamed road conditions.",
      true,
    ],
    [
      "The pitches that Babe Ruth hit for his last-ever homerun and that Joe DiMaggio hit for his first-ever homerun where thrown by the same man.",
      true,
    ],
    [
      "Touch-tone telephone keypads were originally planned to have buttons for Police and Fire Departments, but they were replaced with * and # when the project was cancelled in favor of developing the 911 system. ",
      false,
    ],
    [
      "Round bread (to fit properly with round bologna) has succeeded each time it has been test-marketed, but the difficulty and expense in baking a round loaf of bread makes it unprofitable for bakeries.",
      false,
    ],
    ["Nancy Reagan can palm a basketball.", false],
    [
      "George W. Bush is probably going to be the eighth president in US history to have completed a term in office without ever having issued a single veto.",
      true,
    ],
    ["The praying mantis is the only insect that can turn its head.", true],
    [
      "A quarter has 119 grooves on its edge, a dime has one less groove.",
      true,
    ],
    [
      "In February 2004, a Disney World employee was killed when he fell from a parade float and was trapped between two float sections. OSHA termed this a serious workplace violation, but Disney was fined only $6,300.",
      true,
    ],
    [
      "In 2004, Virgin Atlantic Airlines introduced a double bed for first class passengers who fly together.",
      true,
    ],
    [
      "A Canadian study has shown that if you choose a baby's name before it is born, the baby will most likely be female.",
      false,
    ],
    [
      'Japanese and Chinese people die on the fourth of the month more often than any other dates. The reason may be that they are "scared to death" by the number four. The words four and death sound alike in both Chinese and Japanese.',
      true,
    ],
    [
      "Before Charles DeGaulle was the French President, he was a bounty hunter. (thanks to Eric Snyder)",
      false,
    ],
    [
      "There are more collect calls on Father's Day than any other day of the year.",
      true,
    ],
    ['The Australian aborigine language has over 30 words for "dust." ', false],
    ["Tuesday didn't exist on calendars until 1955. ", false],
    [
      'Winnie the Pooh was originally named "Winnie the Pee". (thanks to Eric Snyder) ',
      false,
    ],
    [
      "Manatees possess vocal chords which give them the ability to speak almost like humans, but don't speak because they have no ears with which to hear the sound. ",
      false,
    ],
    ["Prior to statehood, North Carolina was called South Virginia. ", false],
    [
      "If you put a bee in a film canister for two hours, it will go blind.",
      false,
    ],
    [
      "There are more plastic flamingoes in the United States than real ones.",
      true,
    ],
    [
      "Airport security agents at Logan Airport in Boston, Massachusetts caught a passenger trying to sneak a severed seal head onto a plane inside a cooler. The man said he was a biology professor and had found the dead animal on the beach.",
      true,
    ],
    ["Married men change their underwear twice as often as single men.", true],
    ["Every 46 seconds, someone is scalded at Starbucks. ", false],
    ["The earliest English Muffins contained nooks but no crannies.", false],
    [
      "Most boat owners name their boats. The most popular boat name requested is Obsession.",
      true,
    ],
    ["A jellyfish is 95 percent water.", true],
    ["Ants stretch when they wake up in the morning.", true],
    [
      "La Paz, Bolivia has an average annual temperature below 50 degrees Fahrenheit. However, it has never recorded a zero-degree temperature. Same for Stanley, Falkland Islands and Punta Arenas, Chile.",
      true,
    ],
    [
      "The entire town of Capena, Italy (including children as young as 2 years old) lights up cigarettes each year in honor of St. Anthony's Day. This tradition is centuries old.",
      true,
    ],
    [
      "A woman was chewing what was left of her chocolate bar when she entered a Metro station in Washington DC. She was arrested and handcuffed; eating is prohibited in Metro stations.",
      true,
    ],
  ];

  const [sectionData, setSectionData] = useState([]);

  const handleStart = () => {
    // https://youtu.be/GdYZdLbnsYs
    console.log("views ", views);

    const randomIndex = Math.floor(Math.random() * myAllData.length);

    for (let i = 0; i < 10; i++) {
      setSectionData([...sectionData, myAllData[randomIndex]]);
    }

    console.log(sectionData);
  };

  
  useEffect(() => {

    window.addEventListener("keydown", (e) => {
      e = e || window.event;
      if(e.key === 'F5' || e.keyCode === 82){
          e.preventDefault();
          
      }
    });

    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    }); 
  });

  return (
    <div>
      <TextField
        type="number"
        placeholder="Views Count"
        value={views}
        onChange={(e) => setViews(e.target.value)}
      />
      <TextField
        type="number"
        placeholder="delay times in Sec"
        value={delayTime}
        onChange={(e) => setDelayTime(e.target.value)}
      />
      <TextField
        type="url"
        placeholder="Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <Button onClick={() => handleStart()}> Start </Button>
    </div>
  );
}
