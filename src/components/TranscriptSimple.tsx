const TranscriptSimple = () => {
  return (
    <div className="space-y-10">
      {/* INTRO */}
      <section id="intro" className="scroll-mt-[156px]">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Hi everyone. Welcome to Beyond the Grid. We are here live in person with James Feasey today. Every company needs a suave British guy who can rescue people with a ballpoint pen.
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> I used to prefer underwater knife fighting.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Is that really what it was?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> No, but it gives a good visual.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Exactly. Now I have a whole different image of you, so we'll go with that. But when you're not doing underwater knife fighting, what do you do for Endeavour?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> Here at Endeavour, I look after strategic sales and our go-to-market strategy for AI infrastructure. The focus is twofold. It's articulating the value of the technologies we've developed to customers coming from the technology space, whether that's GPU-as-a-service or traditional hyperscale players. It's also ensuring that input and feedback they have is fed back into our product teams, and then those products and services are effectively articulated throughout that customer journey.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> How did you get to infrastructure as a profession in general?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> I was fortunate enough to get picked up by a company called Corning Optical Communications, the people who make all the optical fiber. They gave me a crash course in technology. From there I was working with a customer in data centers, and then I got to a data center company that had a cloud computing arm. I then had the opportunity to go client-side and lead technology operations at a healthcare company. That was really eye-opening, being on the other side of the vendor landscape, seeing what made good vendors versus bad vendors.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> What's an example of a bad vendor?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> Transactional ones with very short-term mindsets. Also, people who let the customer have too much choice. If you're a cloud company and you are innovating, you should have a defined point of view on what good looks like, how you should implement it, and how you should use it—not sell a brand new service to a customer who is trying to actively learn and you don't offer them prescriptive guidance. I ended up at AWS, where I led go-to-market strategy for high performance and accelerated compute.
          </p>
        </div>
      </section>

      {/* MAIN CONVERSATION */}
      <section id="main-conversation" className="scroll-mt-[156px]">
        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Even before you were in tech, you were in Special Forces. What was your job?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> I was a British commando officer, and I was really fortunate to be part of a specialist maritime counter-terrorism team. One of the things it teaches you, being in the commandos or elite infantry anywhere, is the ability to very rapidly synthesize information and actually determine what is critical in that information.
          </p>
        </div>

        <blockquote className="my-8 border-l-[3px] border-primary pl-5 py-1 text-foreground/70 leading-relaxed italic">
          "In a world where there is a lot of noise, actually cutting through that to determine which pieces of that noise is valuable... you can't possibly respond to all the things you know. It's so multi-threaded." — <span className="font-semibold not-italic text-foreground/90">James Feasey</span>
        </blockquote>

        <div className="space-y-5 text-foreground/85 leading-relaxed text-base">
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> In the world of biomimicry, fans have sort of been the same design for a long time, pushing air at greater levels of efficiency. There was an innovator who realized that nature often pulls through vortices rather than pushing, and he created something that looks a lot more like a corkscrew. The fan efficiency went massively up, and the noise factor went way down. Do you think that sometimes it helps to look at multiple factors at once?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> It definitely does. In the environment we're in, co-design and co-innovation is the name of the game. If we look to how we got here, particularly in the data center industry, you had people developing the best AI hardware they could possibly develop, at a rate that basically outstripped the rate of change in infrastructure. So now you have a company that manufactures chip IP in Nvidia being very, very proactive in terms of encouraging the entire ecosystem to collaborate and innovate to solve the problem of getting their hardware into customers' data centers. In the age of AI, we've realized that you can't look at these things in silos. You've got to have vertical integration, minimize handoffs, and understand the impact across a grid-to-chip ecosystem in order to optimize for both performance and efficiency.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> We've heard these different projections around 945 terawatts of power being used by 2030. What are your thoughts?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> That is absolutely going to happen. And there's a strong reason for that: AI scaling laws. If you scale a number of things—namely model parameters, data set size, and compute—your AI models get better in a predictable, consistent fashion. That predictable fashion is encouraging these tech companies to spend hundreds of billions of dollars on building bigger compute clusters, because there is return in terms of value and performance. We haven't got to the point in AI scaling laws where we see diminishing returns.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Do you think that heightened demand will actually be a beneficial driver for new energy sources?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> I think it is, because energy is becoming a very finite resource. We are going to see a big move towards distributed versus centralized energy. Transmission is extremely difficult to build from a central generation plant out to a data center; if you just bring the power direct to where the data center is, it drastically reduces your time to market. Solar is going to play a big component in that, but you're still going to need baseload power.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> You attended a town hall meeting where one of our data centers was being approved. What was the temperature in the room?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> Mixed. People are extremely excited about the investment and job creation, but right alongside that, there's a lot of bad press about data centers. The cheapest and most efficient way traditionally to cool a data center has been to directly evaporate water, using direct evap technology that consumes millions of gallons of water a year. Now, at the scale we're building, that is utterly unsustainable. We aren't building 30 or 40-megawatt data centers; we're building multi-gigawatt data centers.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> They didn't know that we had waterless cooling.
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> They didn't know that. With waterless cooling, we don't need to go out and get those permits or secure that water source. It's a dependency we've taken off the table. It was really nice to be able to get rid of 90% of people's concerns about a data center coming into town with a technology that we've pioneered and brought to market.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> What's the most enticing use of waste heat that you can think of?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> Rather than looking at a data center as the entire scope of a project, you actually start day one master-planning these campus environments to be multiple-use campuses. You need something to use it on to make that make sense. We can take that waste heat and use it for district heating or greenhouses. If you leave it to afterwards, it becomes infinitely more complex.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> Will data centers continue to get bigger and centralized? Edged is a term that came up with this idea of smaller data centers regionally located near urban environments, but now we're seeing a two-gigawatt campus in the middle of nowhere. Do you think the future ever comes back around?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> In the near term, we're going to continue to see very large centralized campuses, because that's where you get maximal benefit in terms of AI cluster usage. But talking to customers like Meta, they're looking at... three years ago a cluster was a subset of a data hall. Then that cluster became a data center. Now that cluster is a campus. The next thing they want to look at is how do we make multi-campus city clusters. Also, as we move away from a time dominated by AI training to the integration of those models, we'll see this division between where we go and do training (centralized large data centers) and where the inference happens (closer to the edge, closer to the users).
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> In nature, they're called ecotones. When the forest meets the river, wherever two ecosystems come up against each other, that ecotone is fraught with life. I wonder if there could be a richness of ecotones created because we've centralized all of these resources, and the cities and the urban use cases are right there.
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> Ideally what we're trying to create is bring value to a place where there probably wasn't value before. Some of the centralized places we're going haven't had any of that benefit, and we can be the catalyst as those large centralized campuses to bring it.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> What's a leapfrog technology that you think right now might be a little bit in the science fiction category, but will probably show up as real?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> It isn't science fiction, it's more real than that. It is going to be new networking technologies that allow us to break out of this scale-up copper domain that we're trapped in. Right now, to keep power efficiency and performance for GPU-to-GPU networking in copper, it's leading to bigger and denser racks. We've gone from 15 or 20 kilowatts a rack into the hundreds of kilowatts, and now we're talking megawatts of rack. New architectures will allow us to disaggregate racks again, and spread that scale-up domain across a larger footprint at lower power consumption.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> What do you think your kids' jobs are going to be, or their relationship to technology overall?
          </p>
          <p>
            <strong className="text-foreground">James Feasey:</strong> I think that technology is moving faster than robotics, so you're probably better off doing something with your hands. In a world where we spend so much time on the other side of screens, just passively consuming content, having a job where you're physically doing something with your hands will be extremely rewarding.
          </p>
          <p>
            <strong className="text-foreground">Beth Rattner:</strong> James, this is such a pleasure. Thank you for being on the show with us. And I'm really grateful that you're part of Endeavour.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <hr className="border-border" />

      {/* TAKEAWAYS */}
      <section id="takeaways" className="scroll-mt-[156px]">
        <h2 className="text-xl font-bold text-foreground mb-5 tracking-wide">Takeaways</h2>
        <ul className="space-y-5 text-foreground/85 leading-relaxed text-base list-none">
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">Vertical Integration is Mandatory:</strong> Borrowing from biomimicry, infrastructure can no longer be designed in silos. AI requires full grid-to-chip co-innovation where performance, energy efficiency, and cost are optimized simultaneously.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">Waterless Cooling is a Permitting Superpower:</strong> As data centers scale from tens of megawatts into the multi-gigawatt range, traditional direct evaporative cooling is no longer sustainable. Moving to waterless cooling bypasses massive community and regulatory hurdles, drastically accelerating time-to-market.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">Master-Planning the Ecotone:</strong> The concept of a "data center" has rapidly evolved into massive multi-campus clusters. To manage this scale responsibly, facilities must be master-planned from day one as multi-use campuses that integrate waste-heat reuse (like district heating or agriculture) to bring lasting value to local communities.
          </li>
          <li className="pl-4 border-l-[3px] border-primary">
            <strong className="text-foreground">Breaking the Copper Ceiling:</strong> While current innovation focuses on pushing power densities higher to accommodate GPU-to-GPU networking over copper, the next leap forward will be new networking architectures. This will allow data centers to break out of heavy copper domains and disaggregate racks for better efficiency.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TranscriptSimple;
