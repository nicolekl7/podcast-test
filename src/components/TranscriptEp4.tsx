const TranscriptEp4 = () => {
  return (
    <div className="space-y-10">
      {/* INTRO */}
      <section id="intro" className="scroll-mt-[166px]">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Hi everyone. Welcome to Beyond the Grid. This is a special in-person episode. We are here with Wes Short, who is the Senior Director of Infrastructure Projects. We are live in Austin, Texas. This is the barbecue edition of Beyond the Grid. We are talking to Wes because if you ask who the MacGyver of our company is, the answer is always Wes. What I appreciate most about him is that he sees the whole picture. He's not just trying to make things a little bit incrementally more efficient. He's really trying to solve the whole problem at once. So with that, please welcome our special guest, Wes.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Thank you. Thank you for having me here.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Fantastic. One of the things I was really impressed by when I first met you was that you have this bizarre educational background of physics and cartography, and I just don't know how that happens.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> It's quite the story. I've been blessed more than anybody that I could ever imagine, just with the upbringing and my family. I went to college and had a small lawn mowing business when I was very young. In reality, it was all about the work, but it was more about meeting people, and that's why my dad was totally fine with me having a pretty nice little lawn mowing gig.
          </p>
          <p>
            I get back from college my first year, and I'm standing on a guy's roof. He asked if I wanted a real job and told me he got into this electrical contracting company and would give me a good word. Little did I know, he owned the company. So I went and worked for them for a summer, went back to college, changed my major, and got into construction management electronics.
          </p>
          <p>
            I got done with school a little quicker than I wanted to, so I stayed another year. The deal was I had to get another major for every year, so that was my marching order. I stayed for the fourth year and did community and regional planning because I really wanted to see where the cartography side was at, and then be able to design these crazy buildings in Revit with all the analytics inside of it. We blended those together and changed how we looked at cartography. During my senior year I was on an advisory committee to get an architecture degree started. So it was a triple major in five years.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> So you've been an overachiever for a long time is what I'm hearing.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Yeah, I like working. I like punishing myself to work and learn.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> I love that. Also, I want to explore the tinkerer background in you.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> I love tinkering and building stuff young. I think about my first welder when I was 9 or 10 years old. The bracket for the back of the lawnmower to hook the trailer up was $400, and I thought, I'm not spending $400 on a metal bracket. So I bought a welder instead and made my own bracket to haul the trailer behind the lawnmower.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> You're your own problem solver. It's amazing.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Yeah, exactly. You should see my garage.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> One of the other things that amazed me is the barges. The fact that barges have been part of your historical life.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> My family, and my wife's family, have all been in commodity brokering. Nobody really knew what it was. Katie, my wife, would tell people her dad was in the FBI because she could not explain it to anybody. We were always around transportation logistics, which is a big deal. We got into the barge industry for a long time, and we would always tinker around with different ideas.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> How did you get to Endeavour?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> I've been in the electrical business for 20 some odd years. I worked at an amazing electrical contractor and ran the engineering department for about ten years. I've been building data centers real heavy for probably the past six to ten years, getting to work with hyperscale partners and clients, but I wanted a change and was ready to go out on my own.
          </p>
          <p>
            I left the last electrical contractor, and Jake called within a very short time.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Was he persuasive?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> He is very persuasive. I'm either the best business owner or the worst business owner, I guess we'll know in about 5 to 10 years, but it's been a wild ride. It's been an amazing year here. I didn't really totally understand the ecosystem I was getting into, but the more tech we get to look at, that ecosystem just blends together. To try and explain that before I got here, it would have sounded like pie in the sky, not true. And I'll be darned if it isn't true; I do that every day now.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <hr className="border-border" />

      {/* MAIN */}
      <section id="main" className="scroll-mt-[166px]">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> At Endeavour, making the impossible possible—I think that's our new sub tagline. I think the very first question I asked you when I started was, what keeps you up at night about this work? And your answer was grid stability. Maybe we can talk about what grid stability is to you, why are you worried about it, and how does it work?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Power leads to just about everything. Everybody needs water and food, but power gives us that access. If I have to waste my energy to do something, I waste that energy to get my energy. If I have a hoe or a plow and I eat that energy, that's just a one-for-one. We can produce power so I don't have to exert that energy, and then I can do other things.
          </p>
          <p>
            If we lose that ability to have outside power, the delta between those two is critical, and that is the grid. That is being able to get your lights to turn on or make a phone call. If you actually think about grid stability, if we lost all grid power for a substantial amount of time, what are people going to do?
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Do you feel like what happened in Spain this past spring is an indication of what it looks like when the grid goes down, or do you think it could be worse?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> It could be a lot worse. You look at what happened in Spain, it was a terrible event with oscillations and a grid anomaly. All the power companies knew there was a problem and they actually did what they were supposed to do. They disconnected Spain from the grid so that the problem didn't go all the way through the European Union, which could have been terrible if they didn't disconnect.
          </p>
          <p>
            What is very different is that data centers can provide a much larger play when we get into grid autonomous frequency control, stuff that we've done here at Endeavour for quite some time. That's where the play is, that's where Jake's head is at, and I firmly believe that's what we can do, but we have to change how we think about grid interconnects.
          </p>
          <p>
            I want to put generation on site, but utilities have to do a massive study. We can automate how fast those studies go by using AI. It's just like the nuclear reactor programs; the push is to use AI so that going through 800,000 pages of documents doesn't take ten years, and we get educated decisions and the green light.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Is that likely to start happening?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> We have built grids for the past 50 or 60 years that have not been the smartest things. Transformers and infrastructure haven't changed much. EVs were a big paradigm shift.
          </p>
          <p>
            Guess what? This is a novel concept: everybody comes home at the same time, plugs all their EV cars in, and makes dinner. That was the reason for our interns, to take AI, figure out how to do this, and make these grids smarter.
          </p>
          <p>
            Just like a data center, we design the reliability and the number of nines, and we need to push that further down the grid. So if there's instability, we might only turn off one little line in a neighborhood, as opposed to it going all the way up to a medium or high voltage line and causing a countrywide outage.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Can you explain the number of nines real fast? That was a new term for me.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Number of nines is like three nines, meaning 99.9% uptime. Then you got five nines, 99.999%. There are dollar values associated with how many nines you have. That changes how we engineer the data center and the amount of equipment. When we get to these mega sites, it is an unbelievable amount of dollars when you just add one more nine.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> That's so amazing. It took me a while to get my head around what a gigawatt is. What I heard was it's the equivalent of anywhere from 750,000 to 1 million homes. Is that about right?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Depending on where you live, yeah, it's a lot. We can't really use the calculator on the phone anymore because it doesn't have enough commas; we have to type all this stuff in Excel so you can actually start thinking about the numbers. Too many zeros.
          </p>
        </div>

        <blockquote className="my-8 border-l-[3px] border-primary pl-5 py-1 text-foreground/70 leading-relaxed italic">
          "When there is a grid event and a data center isolates itself, that entire data center comes off grid, turns on their generator, opens their utility mains up, and becomes their own little island. The problem with that is if you go to an area with a massive amount of data centers and gigawatts of power just came offline, the generation plant that was running at 100 megawatts just lost 50% of its baseload. That thing is going to want to overshoot, and these anomalies actually go back into the generation plant." — <span className="font-semibold not-italic text-foreground/90">Wes Short</span>
        </blockquote>

        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> I heard that China was moving at the pace of three gigawatts a day of solar, and also still doing coal as well. How do you think they're accounting for such enormous switches of power at that rate for stability?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> There's a lot of different ways to do it. We had a major shift here in the States where we shut down a lot of inertia and just went with renewables. A blend of inertia and renewables is definitely the right way to go. Yes, we want to do renewable, but at the same time we still need some of that inertia on the utility grid to keep stability. I think that's why we're seeing a lot of play in China with renewables, inertia, and turbines. It's a lot easier to work in partnership with each other as opposed to just going with eight gigawatts of solar and seeing what happens.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Speaking of turbines, let's talk about turbo cells and the role that they're going to play in grid forming power.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Fundamentally, our data centers will not break from the grid. We are designing the turbo cell to have that power electronics, that brain, that autonomy to stay connected. So if we have a Hertz swing, we're going to use the power electronics to stay locked on and be that anchor. If a 60 Hertz system goes to 57 Hertz, everybody in the world would be disconnected, but we're going to stay hammered on and deal with that through the power electronics.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Is anybody else doing that?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> I believe there are a couple of people doing it. But the philosophy and vision of Jake is to do this in a vertically stacked data center company. We get to make our own impact goals, and invest in a new company that makes an impact that works for the data center and for mankind.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> The story that we hear a lot is about energy, that we're going to run out of energy if we try to support AI-based data centers. Water used to be the story, now power is the story. But you see a time when water is going to go back to being the story.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Fundamentally, food and water drive people, and power is nice to have. We have the AI boom, all these data centers getting built, and transmission constraints. Water will be gold again. It was a couple of years ago that we needed power, but it's going to go back.
          </p>
          <p>
            We don't evaporate water in our data centers; we have unbelievable thermal systems that have been a constant learning lesson for the past 15 or 20 years. We figure out how to pull all the heat off so we're not creating heat islands, and get that into actual district heating. We can just give you 60 degrees C, or put a small heat pump and give you 90 or 100 C.
          </p>
          <p>
            We do that because it makes everything better for the data center and the community. Now, communities that don't want data centers are going to realize they get free heat and the facility stays online and makes the community better, and they'll get on board.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Could data centers almost become a mini utility of the future?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> I think they could. A massive data center might only have 20 people working inside of it while eating up all this power. What if we took all the byproducts, the waste heat, and built an ecosystem so that instead of 20 people, you had 200 or 2,000 people? We can have farming, alternative fuels, and impact programs working on new materials.
          </p>
          <p>
            Europe has built a lot of their towns with an industry around it where everybody stays in that area, creating a microeconomic community that makes decisions based on whatever the anchor was. That anchor needs to be data centers in the future.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> I think something like $7 trillion of investment will be coming just in the next five years alone.
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> The numbers are astronomical. It's 10x, 20x, and it's not a linear curve; it's an exponential curve that does not seem to be slowing down one bit. I don't think it's a bubble. How we treat and implement the data center will 100% affect that bubble. If we do not look at the full impact of what that data center is doing, we could very easily make this a very quick bubble.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> What are some of the unexplored sources of energy that might be coming down the pike?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> There are so many: fission, fusion, cultivating alternative sources from the ocean or land like wave energy, or even going to space. Renewables have been heavily subsidized so they pencil right now, but we have to see if they will pencil later when those subsidies are taken away.
          </p>
          <p>
            I've spent a lot of time working on how we use solar with data centers so it works in the ecosystem. I can put a battery and get commissioning running; I don't need 200 megawatts day one, I only need 20 or 40.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> One of the things I get really excited about is how your interns came together this summer. Of the projects you saw go through, which ones might keep going forward?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> We've got some IP out of Georgia Tech where we can take any form of electricity, chop it at 18kHz, and augment that sine wave however we want. It's software-defined voltage. I can go on the computer and output 415 AC, 480, or 600V. Future-proofing means we can show people how we're going to transition to a 400V bipolar DC architecture.
          </p>
          <p>
            Another project came from a buddy working at a utility who had no idea where all these power poles were. These poles have been going in for 100 years, and they don't always know where they are. The thought was to take a lidar camera on a drone to fly the utility line, but that was too much drone time.
          </p>
          <p>
            Instead, we took existing imagery, ran it through an AI machine, and trained the model to find grid infrastructure like transmission lines, transformers, capacitor banks, and fuses. My "pink unicorn" request was to see if they could find the splices on the utility line—a splice maybe a foot long on a cable 50 feet in the air. Somehow, in one intern project in the summer, they got it done.
          </p>
          <p>
            We can take the AI model, go to a utility, and tell them how many transformers they have and where to hook up Current Transformers (CTs). Then we can follow any grid issue all the way through those CTs down to the local level and fix the issue there, not back at the country level. You gotta push young people a little way, and when they start seeing the picture, you give them the next breadcrumb. That's how you get the next generation of leaders.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> My last question for you is about the future. Where should we put data centers, and what is the thing you see coming?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> Fundamentally, we've got to figure out how to get rid of water in the system. Thermal transfer and cold plates on GPUs are already maxed out. We've got to figure out a way to cool at a much higher and denser scale more economically. If you put an immersion cooling data center in an ocean, there's no question you're raising the temperature of the ocean, which is not sustainable.
          </p>
          <p>
            I've got to be thinking about the next 10, 50, 100 years. If we build a data center as the source of everything around it, there's no reason why it can't be the anchor for the farm, the greenhouse, and renewable fuels.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> I love that you hit on the point that there is no free energy by putting hot things into cold places. How many of your four children will be going into the data center business?
          </p>
          <p>
            <strong className="text-foreground">Wes Short:</strong> They already have a couple of GPUs sitting around, and they definitely all know how to weld. The next 10 to 15 years are going to be really fun.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <hr className="border-border" />

      {/* Takeaways */}
      <section id="tldr" className="scroll-mt-[166px]">
        <h2 className="text-xl font-bold text-foreground mb-5 tracking-wide">Takeaways</h2>
        <ul className="space-y-5 text-foreground/85 leading-relaxed text-base list-none">
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">The Grid Stability Anchor:</strong> If a large data center unexpectedly drops off the grid, it can cause catastrophic frequency anomalies for utility companies. By designing "turbo cells" with intelligent power electronics, data centers can stay locked onto the grid during Hertz swings and act as stabilizing anchors instead of liabilities.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">AI for Legacy Infrastructure:</strong> Utilities often struggle to locate century-old power lines and infrastructure. Utilizing AI and existing imagery to map utility grids—down to spotting foot-long wire splices—allows operators to isolate faults at the local level rather than experiencing countrywide outages.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">The Data Center as a Micro-Economy:</strong> Rather than viewing data centers solely as power consumers, they should be master-planned as the primary anchors for full ecosystems. Capturing waste heat and byproducts can stimulate job growth by powering adjacent farms, greenhouses, and new material impact programs.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">Water is the Next Bottleneck:</strong> While power transmission is currently the biggest concern for scaling AI, water availability will soon reclaim its position as the ultimate constraint. True sustainability requires advancing high-density cooling economics without dumping thermal waste into natural bodies of water.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TranscriptEp4;