const TranscriptEp3 = () => {
  return (
    <div className="space-y-10">
      {/* INTRO */}
      <section id="intro" className="scroll-mt-[230px]">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Hi, everybody. Welcome to the podcast. This is Beyond the Grid. I'm Beth Rattner, I'm your host. Thank you so much for tuning in today. We have a very intelligent episode. For those of you who don't know me, I lead the impact team here at Endeavour, and we really do focus on sustainability.
          </p>
          <p>
            We believe that data centers can actually change the story around sustainability and Endeavour is leading that charge. We live in a world of connected devices. Your phone can tell you how well you slept last night. It can tell you whether or not running is actually good for your knees. The same thing is true for data centers.
          </p>
          <p>
            We live in a time when PUE numbers and uptime is everything, and the real workhorse behind knowing that is data intelligence. Data intelligence is often the unsung hero behind the data center story. But, today we're going to get a chance to sing the praises of two very special guests.
          </p>
          <p>
            We have Director of Technology and Operations Jonathan Rodriguez and Evan Metzner, who is the global development lead for Edged and Endeavour. They work in a department called EdgedIQ. Welcome, Jonathan and Evan.
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> Hello. Thanks for having us. It's an awesome setup here. I love it.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> I feel like you're both part engineer, maybe biologist. Certainly Evan's got a background in urban planning. Just tell me a little bit about how you got here.
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> Initially my academic background is in economic development and history. I was planning on doing development work in the Middle East, and I kind of fell into urban planning and urban design, specifically focusing on public transportation because I wanted to tackle more actionable and local problems.
          </p>
          <p>
            That's ultimately what led me to Endeavour—getting even more actionable, even more technical and hands-on with the technology itself at the earliest possible stage of the development cycle.
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> For me, my background is a mechanical engineer. Fun fact, I took a programming class in college and I was like, "I'm never going to program" because I just didn't understand it. It wasn't until I got into the real world and realized, "Oh, I can actually start solving problems with this."
          </p>
          <p>
            From there, I went from engineering to a technologist. I had to work on people skills to improve my leadership, thanks to some mentorship and coaching I got, which got me to where I am today.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section id="main-conversation" className="scroll-mt-[230px]">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Let's jump right in here. This concept of digital twins, which is really the same process that we use when we monitor our own biometric devices, or when you're monitoring a data center—that concept's been around for a long time.
          </p>
          <p>
            This goes back to the 1960s when NASA used it to monitor what was happening for Apollo 13. When the oxygen tanks shook and ultimately exploded, people in Houston knew at the same time as the astronauts did. So we have this technology that has been around for 50 years. What is a digital twin? How is it different today than it was back then?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> I think we have to start with defining what a digital twin is, because I feel like it's thrown around a lot these days, especially with AI. You hear these buzzwords—AI, IoT, digital twins. There's a group called the Digital Twin Consortium, and they define a digital twin as a virtual representation of an object or a process that is synced to real time at a certain frequency and with fidelity.
          </p>
          <p>
            Meaning I have telemetry information, like time series data on temperature or the state of an oxygen tank. It's modeled in the context of, "There's a tank in a fuel system or a life support system on a shuttle," and that's a digital twin.
          </p>
          <p>
            From there, the challenge is what you do with it. In NASA's case, it was monitoring. In engineering, it's to simulate. The Digital Twin Consortium gives you 60-plus capabilities of all these things a digital twin could do. It's up to you to really define what your digital twin is tasked with doing.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> So what is a digital twin in the context of EdgedIQ?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> We have to go back to the mission of Endeavour. We're making a dent in infrastructure at a global level. When we have a global portfolio, we have a saying we call M-O-M-O: How do you manage, operate, monitor, and optimize a diverse infrastructure portfolio?
          </p>
          <p>
            We have to have time series data coming in from all our equipment. So we know if it is operating the way it should be. How do we make a better product based on a design condition that we missed? And on top of that, when we make these big sustainability claims, we have to back that up. That's how we use digital twins.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> I love being able to back up sustainability claims. Is our digital twin really only for physical infrastructure, or can you also apply it to social or economic infrastructure as well?
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> I always come at this issue from my background in urban planning. In that field, digital twins and smart cities are often utilized—getting a 3D model of buildings, sewage infrastructure, railroads, etc., and then you can run simulations off of that.
          </p>
          <p>
            In one way, that's very physical. You're modeling where buildings are located, or if you're going to build something new, which buildings you have to knock down.
          </p>
          <p>
            On the other hand, it can be used in all sorts of economic and social modeling projects based on that data. Things like shading analyses when a new construction project is going up. Who is this going to affect? Is it going to cast a shadow over the park? At what time of year? That can feed into participatory planning models where the community can have more precise feedback based on real-world attributes.
          </p>
        </div>

        <blockquote className="my-8 border-l-[3px] border-primary pl-5 py-1 text-foreground/70 leading-relaxed italic">
          "IoT is your nervous system. It's sensing all the parts of your body—the temperature in your skin, your kidney, your liver conditions... And that information goes to the brain, which has a data model of how that information is processed so you can do something. That's what we're getting to now. Being able to get to homeostasis in an industrial setting." — <span className="font-semibold not-italic text-foreground/90">Jonathan Rodriguez</span>
        </blockquote>

        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> There's a lot of data about the different waste streams that come out of a municipality. It could be food waste, sewage waste, or plastic waste. At Endeavour, we're trying to model industrial symbiosis, where those waste streams become the food for a data center, specifically in the form of energy.
          </p>
          <p>
            What does it take to run a data center? We have PACT, which can crack methane and turn it into hydrogen, which can run a turbo cell and lead to a cleaner, carbon-negative system. Does data intelligence play a role in looking at all the different waste streams in a region, so we can get really smart about what we tap into to run those data centers?
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> Yes. It's possible that in some context, a single waste stream can't supply all the energy a data center needs. For example, if we have PACT, maybe that can supply 60% of energy needs. But if we can tie that in with other municipal value streams or other sources of energy, those things can work in concert. If they had to work on PACT alone, the process wouldn't work or wouldn't pencil out.
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> To add an analogy here, it's like we're talking about orchestrating. Let's ground it in who we are as humans and biology. IoT is your nervous system. It's sensing all the parts of your body—the temperature in your skin, your kidney, your liver conditions, the oxygen, CO2.
          </p>
          <p>
            That information goes to the brain. And the brain has a data model of how that information is received and processed so you can do something. That's what we're getting to now: managing and orchestrating to get to homeostasis in an industrial setting.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> You're speaking to my heart. We are really trying to emulate biological systems with this work. What I'm hearing you both say is that this intelligence element is just as important as the technology stack itself, and we really have to be able to connect the two. Is that right?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> Absolutely. Imagine you had the best lungs because you were a runner, but there was no communication from that to the rest of the body.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Let's talk about some specific examples of EdgedIQ. Jonathan, you told me about the bank branches. I'd love for you to share that story.
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> The bank branch is an interesting one because it's a pure HVAC problem. If you're in a Class A tower with multiple stories and your goal is to save money, you reduce the energy efficiency. You have a facility team in the building that can run up and down and stay on top of all the information, saving five to 10%. Because it's a big building, that's thousands of dollars, which justifies a salary.
          </p>
          <p>
            But suddenly, if you get to standalone buildings like a bank branch, a retail shopping center, or fast food, they're buildings with 3,000 to 5,000 square feet. I've gone to Starbucks and never asked to see the facility guy because he's not there. They're serviced out of a hub where someone gets in a van and drives out and figures out what the issue is based on uninformed feedback from the occupants.
          </p>
          <p>
            We ended up using IoT because it's cheap. We deployed these sensors and thermostat controls in a portfolio of 700 bank branches coast to coast across Canada. Without IoT, the cost to send an engineer to save a couple hundred bucks doesn't justify it. But using IoT equated to millions of dollars across 700 locations. The return on investment for energy savings was around three years, partly because IoT lowered the entry barrier to get data into the right hands.
          </p>
          <p>
            We didn't stop at energy. We asked, what about operations? It costs money to send a van. You get stuck in rush hour, you get there and realize the person just didn't know how to use a thermostat. Now you can do remote control. Once you factor that in, paybacks were eight or nine months. You can extend that further. What's the avoided carbon by not getting in a van and driving to the site to figure out you didn't need to?
          </p>
          <p>
            Let's talk about indoor air quality. When COVID came along, building operations changed from maintaining comfort to needing to cycle air all the time. Because of the IoT installation, it made it super easy for this customer to change settings and deploy it nationwide in a matter of hours.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Based on the example you just gave, how does data come back into the Endeavour universe and get fed back into the development engineers to improve products?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> It starts with operations. We're a mission-critical facility. Any information we can get to maintain our uptime and optimize is step one. As Endeavour continues to deploy more data centers and infrastructure, it's feeding that back into the products.
          </p>
          <p>
            We're going to pick up design conditions we may have missed the first time because now we have insight into the moment an event happens, whether it's an outage or a peak heating day. We can rewind and ask if we're overbuilding or underbuilding infrastructure, and tune it.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> That's a really good segue into virtual power plants. Evan, could you explain what a virtual power plant is and the technology that facilitates making that possible?
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> At a high level, a virtual power plant is a roll-up of distributed technologies that are inside existing buildings. What they allow you to do with something like a smart thermostat is, when there are high levels of grid stress, you can increase the temperature by a couple degrees to cut down your usage by some number of kilowatts.
          </p>
          <p>
            That's a really small number for an individual house, but spread out over 100 or 1,000 units, that can add up to a substantial amount of energy. This shows the power of distributed IoT technology. There's no way a single house would have the capacity to influence or help stabilize the grid, but en masse, they can provide a substantial buffer.
          </p>
          <p>
            Coming from the data center industry, where everything has to be mission-critical on day one, we can apply that same technology stack to our distributed IoT within coffee shops and bank branches. That allows us to bring data back in a consistent manner and be a good partner to these grids and energy aggregators participating in these VPPs.
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> To add to that, think about the chaos in the grid. It's because there's a misalignment of power generation and power consumption. This concept of virtual power plants is helping you bring both into alignment.
          </p>
          <p>
            To do that, you have to have good quality data, models, and information because those are split-second decisions. If you modeled a data center incorrectly, think it's going to do one thing but it does the opposite, and you tell the grid to do something else, that doesn't end well at all.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Has monitoring been part of data centers from day one for Endeavour? Has your department evolved over time?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> It's evolved. I've followed the Endeavour team around for a bulk of my career. We were doing digital twins in 2011 before it became a buzzword, monitoring all the information we could on the data center so we could make a better product.
          </p>
          <p>
            We've iterated from there. In 2011, everything was on a desktop, then it became mobile, and now we're talking about APIs and interoperability. The crux of it is still the same: you have to model the data center, have a high-fidelity understanding of the context for that time series data, and then be able to act on it.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Projecting out five or ten years, where do you see data intelligence and IoT going?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> The buzzword now is AI. The challenge is, what is it grounded in? AI is like raising a kid. I have a one-year-old and a three-year-old. If I give them bad information, they start behaving badly. But if I train them well with good quality data, I get a better output.
          </p>
          <p>
            What's exciting now is being able to roll out LLMs and natural language processing on our data set to make it even more accessible. We have to have the right information to make good recommendations. The next few years will show how we continue to adopt AI, and it's going to show the need for good quality data.
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> Not only are we building analytics on top of this data fabric, but we're building entire structures and products off of it. Once we make this data available and reliable, people can build toolsets that weren't possible beforehand.
          </p>
          <p>
            You can think of it like the App Store. Somebody could have built a web app for an iPhone, but there was no backend infrastructure for someone to access it. Now, once this data and access point is here, people can build amazing tools you would never have thought of as the creator of the infrastructure.
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> You talk a lot about foundational tech. We can't lose sight of the fact that we have to solve business problems. A gentleman on our team has a great saying: his job every day is to kill a spreadsheet, centralize the data, and make it accessible to all. It's foundational so someone can act on it and solve a business need.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Is it going to be like kids? One day they're autonomous and making decisions on their own?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> I hope not. I like the concept of keeping the human in the loop. I think we're going to see that for quite some time. We have to design for that human-in-the-loop piece because there's a level of trust we need to have with these systems. If it fails because it's not supervised, we lose all trust. Trust is paramount in keeping humans in the loop.
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> Not to mention the understanding of the system itself. The data can be totally correct, but if the person interpreting it is interpreting it incorrectly because it's not visualized easily or it's confusing data, it has the same net effect. Experts are going to be required throughout this process, even if we assume the technology works flawlessly.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Ten years from now, will there be more people working in your department, or far less because it'll be all AI-driven?
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> I think we'll actually have more. There's a need for collaboration. One of the biggest things I had to grow in was communication. Working on an operations team, I don't know all the answers. I might as well ask. The team ends up being the whole collective Endeavour organization.
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> Needs always expand to fit the function. As soon as we have spare capacity, five more projects crop up that maybe weren't worth it before.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> What's something that you want people to know about what you do?
          </p>
          <p>
            <strong className="text-foreground">Evan Metzner:</strong> One of the most important things is that it's interdisciplinary. Whether we're modeling a data center structure or integrating a new device in IoT, all these things require more domain knowledge than we're ever going to acquire on our own. It's working collaboratively to communicate and build something effective together.
          </p>
          <p>
            <strong className="text-foreground">Jonathan Rodriguez:</strong> The need to collaborate properly emphasizes what Endeavour has done well, which is creating a collaborative culture. It's ironic. We talk about building AI, IoT, and digital twins so we can access information quickly, but to do that, we have to up our level of people-to-people communication. We're back to the same thing: call someone, talk, understand their needs, and add value.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> If collaboration is the key to the future, you two are the perfect example. Thank you both for being on Beyond the Grid. It's been amazing to have you guys together.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <hr className="border-border" />

      {/* TAKEAWAYS */}
      <section id="takeaways" className="scroll-mt-[230px]">
        <h2 className="text-xl font-bold text-foreground mb-5 tracking-wide">Takeaways</h2>
        <ul className="space-y-5 text-foreground/85 leading-relaxed text-base list-none">
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">The M-O-M-O Framework:</strong> To manage, operate, monitor, and optimize global infrastructure, real-time time-series data is required to prove out efficiency gains and back up sustainability claims.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">IoT as the Industrial Nervous System:</strong> Distributed sensor technology acts like a nervous system for buildings, allowing central models to act like a brain and make split-second decisions to achieve homeostasis and align power consumption with grid generation.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">The Power of Virtual Power Plants:</strong> By linking distributed technologies across thousands of small locations (like smart thermostats in bank branches), virtual power plants can act as a massive buffer to stabilize stress on energy grids.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">"Killing Spreadsheets" with Better Data:</strong> AI and LLMs are only as reliable as the data they are trained on. By building a high-fidelity data fabric, teams can quickly spin up new tools and applications to solve business problems and eliminate manual tracking.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TranscriptEp3;