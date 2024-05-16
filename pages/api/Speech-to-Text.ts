// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: {
    sentence: string;
    startTime: string;
    endTime: string;
    speaker_name: string;
    speaker_id: number;
  }[];
  summary: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: transcription, summary: summary });
}

const transcription = [
  {
    sentence:
      "Good day and welcome to the double line total return webcast, hosted by Jeffrey Gundlach.",
    startTime: "00:01",
    endTime: "00:07",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Today's conference is being recorded.",
    startTime: "00:07",
    endTime: "00:09",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "At this time, I'd like to turn the conference over to Ron Riddell, president of Double Line.",
    startTime: "00:09",
    endTime: "00:15",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Please go ahead, sir.",
    startTime: "00:15",
    endTime: "00:16",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Well, thank you and good afternoon and welcome to the double line webcast with Jeffrey Gunlock andrew Hsu.",
    startTime: "00:17",
    endTime: "00:22",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "Title of today's webcast cave people I want to briefly talk about some of the content that just came out here on Doubleline.",
    startTime: "00:23",
    endTime: "00:31",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "If you go to our YouTube channel Doubleline, our very latest channel eleven with Ken Shinoda was just released here.",
    startTime: "00:31",
    endTime: "00:40",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "Ken Shinoda discusses the state of the markets with a play on the title of Led Zeppelin's 1969 song good Times, bad Times.",
    startTime: "00:40",
    endTime: "00:49",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "Also within that YouTube channel, Morris Chen, our portfolio manager of the double line CMBs and CRE debt team, is on with Charles Payne, so please view those, go to YouTube.com doublelinecapital.",
    startTime: "00:49",
    endTime: "01:02",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "Also wanted to highlight we have a new LinkedIn platform with our portfolio manager, Sam Garza, and two of the analysts, Ryan Kimmel and Fay hey.",
    startTime: "01:02",
    endTime: "01:11",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "And it is called between the lines and it focuses and analyzes the current financial markets with a focus on 2024 trends.",
    startTime: "01:11",
    endTime: "01:19",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "If you want to view the rest of the webcast schedule of the year, you can go to doubleline.com and upcoming webcasts.",
    startTime: "01:19",
    endTime: "01:27",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "I want to highlight April 9 diversified fixed income webcast and then on May 13, the smart beta featuring Cape, the new ETF.",
    startTime: "01:27",
    endTime: "01:35",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence: "Although not new anymore, it's almost two years old.",
    startTime: "01:36",
    endTime: "01:39",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence: "You can follow us at our x.",
    startTime: "01:40",
    endTime: "01:42",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Handle at dline funds as well.",
    startTime: "01:42",
    endTime: "01:44",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "Not only do we have the channel eleven on YouTube with Ken Shinoda, but we also have our two podcasts, the Sherman show podcast with Jeff Sherman and Sam Lau and Minutes podcast, which is now live on x spaces every Friday at 01:00 p.m.",
    startTime: "01:46",
    endTime: "01:59",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence: "With Sam Lau and Jeff Mayberry.",
    startTime: "01:59",
    endTime: "02:01",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "And lastly on the YouTube, to highlight our product specialist team, we have a series called Perspectives on that YouTube channel.",
    startTime: "02:01",
    endTime: "02:09",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "Just briefly, we'll be talking about the throughout the webcast, the double line total return bond fund and here you can see the different share classes and expense ratios.",
    startTime: "02:11",
    endTime: "02:20",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "We have three share class, institutional retail and our retirement share class, six reals to highlight the standardized performance in the double line total return bond fund since inception.",
    startTime: "02:21",
    endTime: "02:31",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "The inception of the fund was April 6 of 2010 through 229 and 2024, the annualized return of 3.68% versus the Bloomberg US Ag Bond Index at 2.25, annualized outperformance of 1.43%.",
    startTime: "02:31",
    endTime: "02:45",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence:
      "So with that, I'm going to turn the webcast over to Mister Jeffrey Gunlock.",
    startTime: "02:45",
    endTime: "02:49",
    speaker_name: "Ron Redell",
    speaker_id: 1,
  },
  {
    sentence: "Thanks, Ron, and thanks, everybody, for joining us.",
    startTime: "02:51",
    endTime: "02:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's the second webcast of 2024.",
    startTime: "02:53",
    endTime: "02:56",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And we always do the total return webcast in March.",
    startTime: "02:56",
    endTime: "02:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So let's get started.",
    startTime: "03:00",
    endTime: "03:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You can see that the slide is a little different than the COVID slide with the title of this webcast is cave people.",
    startTime: "03:01",
    endTime: "03:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And what the photo that's on the screen now is, amazingly, fairly recently, they discovered that in Modesto, California, there are people living in caves.",
    startTime: "03:07",
    endTime: "03:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I guess they're not homeless, exactly.",
    startTime: "03:16",
    endTime: "03:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It's not much of a home.",
    startTime: "03:19",
    endTime: "03:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You can see these caves were pretty elaborate in terms of furniture.",
    startTime: "03:20",
    endTime: "03:23",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "They were hanging things on the wall.",
    startTime: "03:23",
    endTime: "03:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And it reminded me of about 20 years ago, I went to China to do a financial conference, and were staying in Xian, China, a second city in China.",
    startTime: "03:25",
    endTime: "03:37",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And were driving out to visit a tourist site.",
    startTime: "03:37",
    endTime: "03:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And on the way, the tour guide said, look out the window.",
    startTime: "03:41",
    endTime: "03:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "You see those caves?",
    startTime: "03:44",
    endTime: "03:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "People were living there as recently as about ten or 20 years ago.",
    startTime: "03:45",
    endTime: "03:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And it was such an astonishing thing to hear that people were living in caves.",
    startTime: "03:50",
    endTime: "03:55",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And here we have in Modesto, California, people had been living in caves.",
    startTime: "03:55",
    endTime: "03:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "They cleared them out because they feared for their safety, because these caves were just dug into the side of a riverbed, and they were afraid that it was going to collapse.",
    startTime: "03:59",
    endTime: "04:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But it made me think about also Plato's republic and the allegory of the cave where Plato's older brother, Glaucon, is talking to Socrates.",
    startTime: "04:07",
    endTime: "04:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And per usual, it's narrated by Socrates, and he talks about an idea that maybe there are people that are chained inside of a cave, and they're chained there from a very early age, and they can't move their legs, they can't move their necks.",
    startTime: "04:18",
    endTime: "04:32",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "They're just forced to stare at a wall in front of them, and behind them is a low wall that hides the people that are walking back and forth behind it.",
    startTime: "04:33",
    endTime: "04:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But the people are carrying something, and behind that wall is a fire.",
    startTime: "04:41",
    endTime: "04:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And the fire casts the shadows of the objects that the people are carrying onto the wall.",
    startTime: "04:45",
    endTime: "04:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And these people chained in the cave see the images, the shadows on the wall, and they actually think that it's them.",
    startTime: "04:50",
    endTime: "04:58",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "They don't realize that it's just an illusion and it's not reality.",
    startTime: "04:58",
    endTime: "05:02",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And one of them gets out of the cave and is blinded by the sun.",
    startTime: "05:02",
    endTime: "05:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And it takes a long time to get his vision back, and he goes, he decides he wants to go back in the cave because the real world is so much better than living in that cave.",
    startTime: "05:07",
    endTime: "05:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But unfortunately, the people that see him come in, he gets blinded again because now with it's dark and he's got to readjust his eyes and the people see that he's blind and they think he's absolutely blind and they refuse to leave the cave because they don't want the negative outcome even though it's a much better outcome.",
    startTime: "05:16",
    endTime: "05:34",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's why the guy came in to try to save them.",
    startTime: "05:34",
    endTime: "05:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It reminds me of those goggles that people wear, virtual reality goggles where they don't want to deal with reality, they want to live yet another layer removed from reality.",
    startTime: "05:36",
    endTime: "05:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It makes me think about how many layers people are becoming removed from reality.",
    startTime: "05:45",
    endTime: "05:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And of course that's the way the news works these days.",
    startTime: "05:49",
    endTime: "05:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so of course politicians have probably always painted the tape more optimistically than it really exists.",
    startTime: "05:52",
    endTime: "05:57",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But there's an awful lot of that going on as well.",
    startTime: "05:57",
    endTime: "06:00",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So let's talk about how we're all sort of living in caves as we go through this presentation.",
    startTime: "06:00",
    endTime: "06:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I've divided it into a small section on the deficit and the debt, which I've talked about at length.",
    startTime: "06:05",
    endTime: "06:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So I'm not going to pave that road yet again with that level of detail.",
    startTime: "06:11",
    endTime: "06:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Then I'm going to talk about some recession indicators including employment, which is a big piece of the economic puzzle.",
    startTime: "06:15",
    endTime: "06:21",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And then we'll talk about inflation.",
    startTime: "06:22",
    endTime: "06:23",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The CPI came out today.",
    startTime: "06:23",
    endTime: "06:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It was a little hotter than expected.",
    startTime: "06:24",
    endTime: "06:26",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We've got core at three two and headline at three two and core at three eight.",
    startTime: "06:26",
    endTime: "06:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I think I've got those in the right order.",
    startTime: "06:31",
    endTime: "06:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We'll see and then we'll talk about bonds andrew will go through the detail of the total return bond fund.",
    startTime: "06:33",
    endTime: "06:40",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So let's get started.",
    startTime: "06:40",
    endTime: "06:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It's interesting.",
    startTime: "06:41",
    endTime: "06:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "This is the budget deficit as a percentage of GDP on a rolling twelve month basis.",
    startTime: "06:42",
    endTime: "06:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And the administration just came out with their forecast for the 2025 deficit.",
    startTime: "06:48",
    endTime: "06:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And even though we're running a 6.3% deficit, percentage GDP as the most recent quarter, most of January, the prediction is that we're going to have a 6.1% deficit as a percentage of GDP per the administration in 2025.",
    startTime: "06:53",
    endTime: "07:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And that seems to me to be kind of scary.",
    startTime: "07:09",
    endTime: "07:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We're supposed to be in an expansion and we're running historically high deficits as a percent of GDP should we fall into recession.",
    startTime: "07:12",
    endTime: "07:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And I talked about this in my just markets webcast.",
    startTime: "07:19",
    endTime: "07:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We're going to have the deficit go to double digit, very likely percentage of GDP.",
    startTime: "07:22",
    endTime: "07:27",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And this is a problem because of the way that the interest rates have gone up.",
    startTime: "07:27",
    endTime: "07:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Let me just put this recessionary movement on budget deficit in context.",
    startTime: "07:31",
    endTime: "07:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The dotted line is the u three unemployment rate, and the red shaded area of the underneath the line is the US budget deficit.",
    startTime: "07:36",
    endTime: "07:46",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And those, as always, the red shaded bars are recessionary periods.",
    startTime: "07:46",
    endTime: "07:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And you'll notice that from 1970 until about 2015, they were very correlated.",
    startTime: "07:50",
    endTime: "07:55",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "When you had a low unemployment, you had a low deficit.",
    startTime: "07:56",
    endTime: "07:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "When you had high employment, you had a high deficit.",
    startTime: "07:59",
    endTime: "08:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That makes sense because in recessions tax receipts go down and federal outlays for transfer payments go up.",
    startTime: "08:01",
    endTime: "08:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But notice what happened in 2015.",
    startTime: "08:08",
    endTime: "08:10",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Unemployment fell from 2015 into 2020 before the lockdown, and rather sharply at that.",
    startTime: "08:11",
    endTime: "08:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And the unemployment rate went up as a percentage of the deficit, went up as a percentage of GDP by a lot.",
    startTime: "08:18",
    endTime: "08:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And you'll notice that now we're back down, although we're starting to rise on unemployment at 3.9 unemployment rate right now.",
    startTime: "08:24",
    endTime: "08:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And you'll see the deficit starting out at this very high number.",
    startTime: "08:31",
    endTime: "08:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So during recessions, the deficit tends to go up by about five percentage points on average of GDP over this multi decade timeframe.",
    startTime: "08:34",
    endTime: "08:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But over the most recent three recessions, it went up more like 9% of GDP.",
    startTime: "08:43",
    endTime: "08:47",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so we're looking at the government predicting 6.1.",
    startTime: "08:47",
    endTime: "08:51",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "If we have a recession in 2025 or 2024, it's likely going to be more like ten or 12% of GDP.",
    startTime: "08:51",
    endTime: "08:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And this is a big issue because there we go.",
    startTime: "08:59",
    endTime: "09:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The federal interest expense as a percentage of federal revenue is skyrocketing thanks to all of this debt and all of the bonds that are maturing.",
    startTime: "09:03",
    endTime: "09:10",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We have about 17 trillion treasuries maturing in the next three years.",
    startTime: "09:10",
    endTime: "09:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And of course, higher interest rates as the Fed has engineered.",
    startTime: "09:15",
    endTime: "09:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The Fed funds rate up to five and three eight.",
    startTime: "09:18",
    endTime: "09:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "We're starting to see a verticality in the blue line.",
    startTime: "09:20",
    endTime: "09:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "This is only through September, by the way, the year end data, I guess, isn't available.",
    startTime: "09:24",
    endTime: "09:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And with the trajectory of this line, it looks like we're on a track almost certainly to take out the percentage of federal interest expense, that is a percentage of interest expense as a percentage of federal revenue.",
    startTime: "09:28",
    endTime: "09:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It looks like we're going to go to an all time high almost with certitude, probably take out the 19, I guess it's 91 high of around 18% probably this year.",
    startTime: "09:41",
    endTime: "09:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And this might be one of the insidious reasons why the Fed is a little bit more anxious than a lot of people think they should be to cut interest rates, because this debt rolling over has an average coupon.",
    startTime: "09:52",
    endTime: "10:04",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Some of the bonds that are rolling off, where should say, in 2019 or 2018, they have coupons of 25 basis points or 50 basis points.",
    startTime: "10:04",
    endTime: "10:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so the five years, for example, that were issued in 2019, they're going to be rolling over at a 400 basis point interest rate increase if interest rates stay where they are.",
    startTime: "10:13",
    endTime: "10:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And this is a turning into an absolutely critical problem that we'll be talking about more in future webcasts.",
    startTime: "10:22",
    endTime: "10:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I don't want to dwell on it here.",
    startTime: "10:28",
    endTime: "10:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So here is the trajectory of the interest rate and the ten year treasury yield.",
    startTime: "10:30",
    endTime: "10:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So the blue line is the generic ten year treasury yield, which is at 4.09 right now.",
    startTime: "10:35",
    endTime: "10:40",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And then we see the moving average on there.",
    startTime: "10:40",
    endTime: "10:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And then the blue line, the red line is the moving average.",
    startTime: "10:45",
    endTime: "10:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It's a three year moving average.",
    startTime: "10:48",
    endTime: "10:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And then we see the treasury interest bearing debt, total marketable type of number.",
    startTime: "10:50",
    endTime: "10:54",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So this is the Fed's tractor pull problem, that all this debt coming due and the interest rates are way higher than they've been in the ten years prior to 2022 type of timeframe.",
    startTime: "10:54",
    endTime: "11:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "One of the reasons I think the economy has held up better than almost everybody expected, including me, is this chart where the monetarists have databases that show that when m two goes negative year over year, it's a strong, very reliable recession indicator.",
    startTime: "11:05",
    endTime: "11:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that happened, as your eye can sort of see, at the end of 2022 or so.",
    startTime: "11:22",
    endTime: "11:27",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so people thought, well, it's gone negative.",
    startTime: "11:28",
    endTime: "11:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But I think the point that the monetarist economists missed is that the blue line was gunned so much higher than the trend from 2009 to 2019.",
    startTime: "11:30",
    endTime: "11:40",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It was a very steady rise in m two.",
    startTime: "11:40",
    endTime: "11:43",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But then all of a sudden, trillions of dollars get dumped into it, and that money is still there.",
    startTime: "11:43",
    endTime: "11:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "You can see that we're nowhere close to trend on M two.",
    startTime: "11:49",
    endTime: "11:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And this is one of the reasons why I think that the economy did not revert to its usual recessionary characteristic right when the m two went negative year over year.",
    startTime: "11:52",
    endTime: "12:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But there are things that are certainly storm clouds for the economy, and we're going to go through a few of them now.",
    startTime: "12:03",
    endTime: "12:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So I just gave you one that's a positive.",
    startTime: "12:09",
    endTime: "12:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But here's things that are recessionary signals.",
    startTime: "12:11",
    endTime: "12:14",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And here's the slope of the yield curve.",
    startTime: "12:14",
    endTime: "12:17",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And we have the two year versus the ten year here.",
    startTime: "12:17",
    endTime: "12:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And when we're in the red shaded area, it means the ten year yield is lower than the two year yield.",
    startTime: "12:20",
    endTime: "12:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And usually that happens before these red vertical shaded areas, which are recessions.",
    startTime: "12:24",
    endTime: "12:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "This is starting to look a little bit more like the 1980s, not only in terms of that first chart, I showed of the interest expense as a percentage of revenue.",
    startTime: "12:30",
    endTime: "12:39",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But it's also the duration of time that the yield curve has been inverted.",
    startTime: "12:39",
    endTime: "12:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It's a pretty long time period and it's exhibiting that characteristic which is always the really flashing red light for recession in that it's shrinking.",
    startTime: "12:44",
    endTime: "12:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We were at 108 basis point inverted and on this chart it shows about 39.",
    startTime: "12:53",
    endTime: "12:58",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I think it's as of today about 45 basis points inverted, 210.",
    startTime: "12:58",
    endTime: "13:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So we're waiting to see if this line goes above zero.",
    startTime: "13:03",
    endTime: "13:06",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It hasn't done that yet.",
    startTime: "13:06",
    endTime: "13:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so I think to be really confident in a near term recession call you need that red shaded area to disappear and turn into a zero yield curve or a positively slope yield curve.",
    startTime: "13:07",
    endTime: "13:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And we're in the process maybe of doing that.",
    startTime: "13:21",
    endTime: "13:23",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But it hasn't happened yet.",
    startTime: "13:23",
    endTime: "13:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Another early warning on recession that needs to revert before you have the red flashing light is the expectations of consumers in the present situation versus the future.",
    startTime: "13:25",
    endTime: "13:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And when the red shade area shrinks it means that their view of the present is getting more pessimistic meeting but is always a rather pessimistic view of where the economy will be in about twelve months.",
    startTime: "13:36",
    endTime: "13:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We've been, again, we've been a long way while in this area of very deeply decent expectations of the present and bad expectations of the future.",
    startTime: "13:48",
    endTime: "14:00",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But it looks like the yield curve, it's starting to revert, but too early to say that there's a near term, an extremely heightened near term recession view.",
    startTime: "14:00",
    endTime: "14:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Now one thing that has started to flip, and I talk a lot about this, is employment.",
    startTime: "14:09",
    endTime: "14:14",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We see this just goes back to 1997, but we've got those red shaded areas and we see that when you cross over the one year moving average in a meaningful and convincing way, it's usually the start of a rapid rise in unemployment.",
    startTime: "14:14",
    endTime: "14:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And that just happened in the most recent employment report.",
    startTime: "14:28",
    endTime: "14:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We were right on the one year moving average, but the unemployment rate did go up by 0.91.",
    startTime: "14:31",
    endTime: "14:37",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Robin doesn't make a spring and one month's crossover is not enough to be definitive, but this certainly has sort of the look to it.",
    startTime: "14:37",
    endTime: "14:47",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so we're watching this extremely importantly, I think with a lot of importance.",
    startTime: "14:47",
    endTime: "14:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think that this is the most important economic indicator to watch as we go forward month by month.",
    startTime: "14:52",
    endTime: "14:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We also use the 36 month moving average, a three year moving average.",
    startTime: "14:59",
    endTime: "15:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And that's starting to get the look too.",
    startTime: "15:03",
    endTime: "15:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It's moving up and we see the 36 month moving average is coming down and it's coming down, you know, fairly rapidly.",
    startTime: "15:06",
    endTime: "15:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so we'll wait to see if this crosses over.",
    startTime: "15:13",
    endTime: "15:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We expect that absent as a base case, we expect that this will cross over sometime in the next, say, four to six months.",
    startTime: "15:15",
    endTime: "15:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So we're going to be watching for that.",
    startTime: "15:25",
    endTime: "15:27",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is really a puzzling slide.",
    startTime: "15:28",
    endTime: "15:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I'm going to talk about some of the puzzling things about all these statistics that we're seeing.",
    startTime: "15:31",
    endTime: "15:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You'll notice that the initial claims since 2022 were pretty volatile.",
    startTime: "15:35",
    endTime: "15:39",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "They were falling.",
    startTime: "15:39",
    endTime: "15:40",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Now, that's because we had that spike due to the lockdowns.",
    startTime: "15:40",
    endTime: "15:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But I'm struck by how very stable this number has been for the past couple of years.",
    startTime: "15:44",
    endTime: "15:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It almost looks contrived to me.",
    startTime: "15:50",
    endTime: "15:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And I'm starting to think that there's a lot of economic statistics that are starting to lose some of the veracity that they might have had in past time periods.",
    startTime: "15:53",
    endTime: "16:02",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And one of the reasons I'm learning about this, I showed this slide once before.",
    startTime: "16:02",
    endTime: "16:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Is the survey data really trustworthy?",
    startTime: "16:06",
    endTime: "16:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You'll notice that back ten years ago, the response rates on surveys.",
    startTime: "16:08",
    endTime: "16:12",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Let's just take a look at the employment cost index.",
    startTime: "16:12",
    endTime: "16:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It looks like that was up at about 75% and we see others around two thirds survey response and look what's happened to them ever since 2023.",
    startTime: "16:15",
    endTime: "16:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We say that we're getting something like half or 60% only of the responses.",
    startTime: "16:25",
    endTime: "16:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So you might wonder, is today's survey data like the establishment survey, the unemployment number that comes out the first Friday of each month that gets all the attention?",
    startTime: "16:31",
    endTime: "16:40",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Is it really as robust as it was, say, ten years ago?",
    startTime: "16:40",
    endTime: "16:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I would have to conclude that it's a little bit more suspect.",
    startTime: "16:45",
    endTime: "16:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Also, there's other ways of looking at unemployment rates.",
    startTime: "16:48",
    endTime: "16:51",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "This is the share of states with rising unemployment rate, higher unemployment rate versus six and twelve months ago.",
    startTime: "16:52",
    endTime: "16:58",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And we can just focus in on the one that is the tan type of line.",
    startTime: "16:58",
    endTime: "17:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That's the last six months and it's 88% of the reporting districts.",
    startTime: "17:03",
    endTime: "17:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Now there's actually 51 reporting districts because Washington, DC gets a report as well.",
    startTime: "17:07",
    endTime: "17:12",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But 46 out of the 51 reporting districts have rising unemployment over the past six months.",
    startTime: "17:12",
    endTime: "17:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And the ones that without rising unemployment are listed on the screen.",
    startTime: "17:18",
    endTime: "17:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Sure.",
    startTime: "17:22",
    endTime: "17:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Okay.",
    startTime: "17:23",
    endTime: "17:23",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Pennsylvania.",
    startTime: "17:23",
    endTime: "17:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's meaningful sized state.",
    startTime: "17:24",
    endTime: "17:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Sure.",
    startTime: "17:26",
    endTime: "17:26",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Texas, there's a lot of people in Texas, but then look at Wyoming, Minnesota, North Dakota.",
    startTime: "17:26",
    endTime: "17:32",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "These are not the highest population states.",
    startTime: "17:32",
    endTime: "17:34",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So mathematically, is it even possible that these states can overcome the rising unemployment that we find in California, in Florida, in Illinois, in New York, in New Jersey?",
    startTime: "17:34",
    endTime: "17:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It'd be hard to make the math work just on using those numbers.",
    startTime: "17:49",
    endTime: "17:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So maybe we should put more emphasis or not put sole emphasis on the establishment survey, but also put emphasis on some other employment data like this, which rather strongly suggests that the trend that's starting to show up in the establishment survey with that twelve month moving average cross with the monthly number crossing over the twelve month moving average, maybe that is really starting to loosen up and it's going to start going higher in the fashion that the establishment survey number versus moving average did in past recessions.",
    startTime: "17:53",
    endTime: "18:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "We'll be watching for that.",
    startTime: "18:24",
    endTime: "18:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is a certain recession indicator.",
    startTime: "18:25",
    endTime: "18:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "This is the cyclical and noncyclical six month change and recessions.",
    startTime: "18:28",
    endTime: "18:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And again, the red shaded areas are recession.",
    startTime: "18:33",
    endTime: "18:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And this type of divergence happens only leading up to recessions.",
    startTime: "18:36",
    endTime: "18:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It even happened leading up to COVID.",
    startTime: "18:41",
    endTime: "18:43",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Oddly, it's weird how COVID made these recession indicators actually work, even though it was an exogenous event for sure.",
    startTime: "18:43",
    endTime: "18:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But we see the type of divergence that one should be on the watch for now.",
    startTime: "18:51",
    endTime: "18:57",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is the household survey.",
    startTime: "18:57",
    endTime: "18:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I said the establishment survey comes out the first Friday.",
    startTime: "18:59",
    endTime: "19:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Well, so does the household survey.",
    startTime: "19:01",
    endTime: "19:02",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And the picture is radically different of the household survey.",
    startTime: "19:03",
    endTime: "19:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We see that the blue bars are total full time us employment and they have fallen for the last three months in a row on full time employment, especially December, which was a horrific decline that completely diverged with the establishment survey that showed growth.",
    startTime: "19:07",
    endTime: "19:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But we now have three months of full time job losses.",
    startTime: "19:22",
    endTime: "19:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Now what we see is part time workers are starting to shrink too.",
    startTime: "19:25",
    endTime: "19:29",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "In the last two months we've actually had a negative, if you accumulate the two, and then we have a part time for economic reasons, employment, which remains, that was negative last month too on the household survey, but isn't as negative as the full time situation.",
    startTime: "19:29",
    endTime: "19:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So another divergence in this employment data that suggests that the rubric that there's this booming employment economy is contradicted by other areas.",
    startTime: "19:45",
    endTime: "19:56",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "If you want to look closely enough, here's ni fib hiring plans by small businesses.",
    startTime: "19:56",
    endTime: "20:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Again, they show market deterioration, leading indicator for sure.",
    startTime: "20:03",
    endTime: "20:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So it's before the recession comes, it starts to deteriorate.",
    startTime: "20:08",
    endTime: "20:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But it has that look again.",
    startTime: "20:11",
    endTime: "20:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It has the look of the past two recessions and it's dropping at a very steep rate in the most recent few reporting periods.",
    startTime: "20:13",
    endTime: "20:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's the unemployment rate and small business hiring plans.",
    startTime: "20:23",
    endTime: "20:26",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The blue line is small business hiring plans.",
    startTime: "20:27",
    endTime: "20:29",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The moving average is the darker blue line.",
    startTime: "20:31",
    endTime: "20:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And again, we have that look where it's coming down.",
    startTime: "20:33",
    endTime: "20:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And even the youth unemployment rate, which we showed in some of the earlier slides, is hooking over here's average weekly hours worked in manufacturing, which is also sliding very quickly.",
    startTime: "20:36",
    endTime: "20:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And first they cut the hours and then they cut the bodies.",
    startTime: "20:50",
    endTime: "20:54",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's the way the economic cycle works.",
    startTime: "20:54",
    endTime: "20:56",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so historically, when you have this type of a decline, one should be on the lookout for a rising layoff rate.",
    startTime: "20:56",
    endTime: "21:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So this is what the unemployment rate looks like.",
    startTime: "21:03",
    endTime: "21:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Over the past multiple recessions, going back to 1949, we've only taken the middle two quartiles, and the black line is the median of those middle two quartiles.",
    startTime: "21:07",
    endTime: "21:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And again, the red line is the current situation.",
    startTime: "21:18",
    endTime: "21:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We're just positing that we're at the front edge of recession here.",
    startTime: "21:21",
    endTime: "21:23",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I'm not really predicting it, but I'm just saying let's pretend that a recession starts next month.",
    startTime: "21:23",
    endTime: "21:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Well, it sort of has the look.",
    startTime: "21:28",
    endTime: "21:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You have to acknowledge that, in fact, it even looks like the median.",
    startTime: "21:30",
    endTime: "21:34",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "In the past, some of those blue shaded areas showed sort of a false start of a rising unemployment rate that was just a precursor to what happened at the zero line.",
    startTime: "21:34",
    endTime: "21:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's the two's ten's spread, the yield curve spread.",
    startTime: "21:46",
    endTime: "21:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Under that same methodology, we're looking at the middle two quartiles, and it sure looks like we've seen the maximum version of the yield curve, and it looks like we're moving along, but we're not in a recession yet.",
    startTime: "21:51",
    endTime: "22:04",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But it certainly has the shape of the idea that the Fed is probably going to start cutting interest rates here in 2024.",
    startTime: "22:05",
    endTime: "22:12",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The odds are not as high as they were at the turn of the year.",
    startTime: "22:12",
    endTime: "22:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "There was actually a moment where the shape of the yield curve suggested seven rate hikes of 25 basis points, or some other combination that gets you that same cumulative number.",
    startTime: "22:15",
    endTime: "22:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That's down to 3.53 and two thirds for this year at the present moment, because of the way in which the yield curve movement has developed so far in 2024.",
    startTime: "22:25",
    endTime: "22:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's wage growth and the quits rate.",
    startTime: "22:37",
    endTime: "22:39",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The quits rate is the red line.",
    startTime: "22:39",
    endTime: "22:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It leads the blue line.",
    startTime: "22:41",
    endTime: "22:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And the fit here, I include this once.",
    startTime: "22:43",
    endTime: "22:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I was debating where to include this one, but the fit of these is just uncanny, how the red line leads the quits rate by eight months so perfectly, and it suggests that the quits rate is going to go down to basically where it was basically pre pandemic.",
    startTime: "22:45",
    endTime: "23:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So we'll be watching for that now.",
    startTime: "23:07",
    endTime: "23:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Also, consumers are starting to show some signs of stress.",
    startTime: "23:11",
    endTime: "23:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We see that the auto loans, the number of accounts by loan type in auto loans is stable, and it is in mortgage loans as well, but not in credit cards.",
    startTime: "23:15",
    endTime: "23:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We've had a market increase in credit cards, which obviously are used because people are short on money.",
    startTime: "23:25",
    endTime: "23:34",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Buy now, pay later.",
    startTime: "23:34",
    endTime: "23:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's the interest rate on credit cards.",
    startTime: "23:36",
    endTime: "23:38",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So with this large increase in credit card usage, the interest rate is up by, not surprisingly, about 600 basis points, because it follows largely the movement in the Fed.",
    startTime: "23:38",
    endTime: "23:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "In fact, they've risen even faster than the Fed has raised.",
    startTime: "23:49",
    endTime: "23:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The Fed funds rate, 23% is a really punishing interest rate level.",
    startTime: "23:54",
    endTime: "23:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so I'm fearful that the credit card situation may lead to a pullback in consumer spending.",
    startTime: "23:59",
    endTime: "24:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Let's talk about inflation.",
    startTime: "24:07",
    endTime: "24:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "CPI came out today, and we see that the core is at 3.8.",
    startTime: "24:08",
    endTime: "24:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So I did have it right at the beginning, and the red line is the headline rate, and that's at 3.2.",
    startTime: "24:13",
    endTime: "24:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Now, sure, it's there down, but you'll notice that the core rate is still.",
    startTime: "24:19",
    endTime: "24:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The core rate is decelerating in its decline and still nowhere near the 2% level.",
    startTime: "24:22",
    endTime: "24:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And the headline rate has clearly stalled out.",
    startTime: "24:28",
    endTime: "24:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It hit a low back in the third quarter, I think, of last year, and then bounced up.",
    startTime: "24:31",
    endTime: "24:37",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And it's actually looking to be a little bit more tenacious than people were hoping for.",
    startTime: "24:37",
    endTime: "24:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "One of the reasons for that is no doubt the price of oil has gone up this year by about 10%.",
    startTime: "24:42",
    endTime: "24:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "When oil goes up by about $10, it's now about 10%, about $7.",
    startTime: "24:48",
    endTime: "24:54",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But if it goes up dollar ten, it adds with a lag, about four tenths to the headline CPI.",
    startTime: "24:54",
    endTime: "25:00",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So there was hope that the headline CPI would get below 2.5 by the middle of this year.",
    startTime: "25:00",
    endTime: "25:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Under the current framework, it looks like we'll be lucky to get anything below 3% sometime in the middle of this year.",
    startTime: "25:05",
    endTime: "25:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So the inflation data has gotten to be a little stickier, thanks to some rises in the price of energy.",
    startTime: "25:13",
    endTime: "25:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's the core CPI ex shelter inflation.",
    startTime: "25:21",
    endTime: "25:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You notice we're parsing CPI and inflation, PpI, PCe, every which way to Sunday these days.",
    startTime: "25:24",
    endTime: "25:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It used to be year over year, and then it was core joined year over year, and now it's core ex inflation.",
    startTime: "25:31",
    endTime: "25:38",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And now we're looking at three months annualized and six months annualized.",
    startTime: "25:38",
    endTime: "25:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "For all these various indices and subsets of those indices, you can almost pick whatever you want.",
    startTime: "25:41",
    endTime: "25:46",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So those that want to be sanguine about the 2% target being potentially been obtainable, you would use this one.",
    startTime: "25:46",
    endTime: "25:55",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So you take out food, you take out energy, you take out shelter, it seems like you don't have much left, but it is at 2.2%, close to the feds too, so shelter would somehow calm down.",
    startTime: "25:55",
    endTime: "26:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And the OER has been higher than expected.",
    startTime: "26:07",
    endTime: "26:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "For the past two months, Oer has gone up non annualized 1%, so it annualizes at a higher than 6% rate.",
    startTime: "26:11",
    endTime: "26:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So that hasn't happened yet, which seems odd to me, because there's a pretty good correlation between the Zillow rent index and the OER lagged by twelve months.",
    startTime: "26:19",
    endTime: "26:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You'll notice that the zillow index, the red line, has come down very markedly, from 16% at its peak to 3% at its nadir, and it's now at 3.5%.",
    startTime: "26:31",
    endTime: "26:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And yet the owner's equivalent, rent is still way up there, and it surprised to be greater than expected over the last two months.",
    startTime: "26:42",
    endTime: "26:51",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And you'll notice that the blue line is kind of lagging.",
    startTime: "26:51",
    endTime: "26:54",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I suppose it could always accelerate its decline, but there's a big gap here, and for the Fed to hope to get to below 2.5% or towards 2%, you really need this blue line to get down by about three percentage points at a minimum.",
    startTime: "26:54",
    endTime: "27:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so we'll be watching that.",
    startTime: "27:11",
    endTime: "27:12",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "There is reason for hope, though, on a lag basis.",
    startTime: "27:12",
    endTime: "27:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that's the amount of multifamily units under construction is the highest of all time.",
    startTime: "27:16",
    endTime: "27:21",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It looks like other than maybe 1973, it's awfully close to 1973.",
    startTime: "27:21",
    endTime: "27:26",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The gray area is single family houses under construction.",
    startTime: "27:26",
    endTime: "27:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And it used to be that was the lion's share for most of the last 30 years, that was the lion's share of construction.",
    startTime: "27:30",
    endTime: "27:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But there's been a boom in multifamily units under construction.",
    startTime: "27:36",
    endTime: "27:40",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Takes years to build these many of these larger projects.",
    startTime: "27:40",
    endTime: "27:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so there will be pressure on rents, I think, to the downside rather than the upside, when all of these units come online.",
    startTime: "27:44",
    endTime: "27:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So you have about 35% more multifamily units under construction than single family.",
    startTime: "27:52",
    endTime: "28:00",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So there might be a hope for those that are looking for rent relief.",
    startTime: "28:00",
    endTime: "28:06",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's the headline and core PCE that the Fed uses now.",
    startTime: "28:07",
    endTime: "28:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is looking much better on the headline number.",
    startTime: "28:11",
    endTime: "28:14",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We're at 2.8 on the core index, and we're only at 2.4 on the headline number.",
    startTime: "28:14",
    endTime: "28:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so this would be encouraging to the Fed.",
    startTime: "28:22",
    endTime: "28:26",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Unfortunately, the Fed has chosen maybe out of hope to use to be changing the way they're looking at inflation.",
    startTime: "28:26",
    endTime: "28:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "You remember that at Jackson Hole back in 2022, the Fed started talking about super PCE.",
    startTime: "28:36",
    endTime: "28:43",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "You don't hear them talk about supercore PCE.",
    startTime: "28:43",
    endTime: "28:46",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And the reason probably is that it's not looking good on the six month annualized basis, which is a methodology they trotted out at the November 1 dovish rhetorical pivot.",
    startTime: "28:46",
    endTime: "28:57",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We can say that now if you annualize the six month number, it's not so good.",
    startTime: "28:57",
    endTime: "29:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It's gone up by a fair amount.",
    startTime: "29:01",
    endTime: "29:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It's now at 3.4%, no longer in the two handle.",
    startTime: "29:03",
    endTime: "29:06",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We see that year over year and six months are virtually identical.",
    startTime: "29:07",
    endTime: "29:10",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So the super core seems to have settled in at 3.5%.",
    startTime: "29:10",
    endTime: "29:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so we haven't heard about that anymore.",
    startTime: "29:15",
    endTime: "29:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We hear a lot about price levels, and we know that the inflation rate was much worse at 9% CPI than it is today at more like 3.2 on the headline.",
    startTime: "29:18",
    endTime: "29:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But this is the PCE, and we're just saying what's happened to your purchasing power?",
    startTime: "29:28",
    endTime: "29:32",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "If you had a dollar of like, if you're living on a fixed income and you're in getting the same amount of money, how much is your purchasing power been eroded by the growth in the PCE?",
    startTime: "29:32",
    endTime: "29:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And the answer is 14%.",
    startTime: "29:42",
    endTime: "29:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And this is why people still feel like there's a lot of inflation.",
    startTime: "29:45",
    endTime: "29:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It's because the prices are still high, just like the m two.",
    startTime: "29:48",
    endTime: "29:51",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Money supply is still high.",
    startTime: "29:51",
    endTime: "29:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The prices are not, you're not eroding as quickly as you were in 2021 into 2022, but it's still eroding and you've lost a lot of your purchasing power.",
    startTime: "29:53",
    endTime: "30:02",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I mean, if you have another four years of this, you'll have lost almost 30% of your purchasing power.",
    startTime: "30:02",
    endTime: "30:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So no wonder there's a lot of people that don't want to buy the idea that the economy has been fully repaired and inflation has been conquered.",
    startTime: "30:08",
    endTime: "30:17",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So we also have the PPI producer price indices.",
    startTime: "30:17",
    endTime: "30:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "These are leading indicators of the consumer price index.",
    startTime: "30:20",
    endTime: "30:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And we see that the final demand year over year is 0.9 and the ex food and energy number is 2.6.",
    startTime: "30:25",
    endTime: "30:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So there's nothing really that scary in here.",
    startTime: "30:31",
    endTime: "30:34",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Even the ex food and energy is near a local low.",
    startTime: "30:34",
    endTime: "30:39",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And the headline number, there's virtually no inflation at all.",
    startTime: "30:39",
    endTime: "30:43",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The ones I like, I always talk about this import and export prices because they're not seasonally adjusted, they're just prices.",
    startTime: "30:45",
    endTime: "30:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And we see that we've been negative on both export and import prices for a while now.",
    startTime: "30:53",
    endTime: "30:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I guess it goes back maybe 18 months or so.",
    startTime: "30:59",
    endTime: "31:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "We're still negative.",
    startTime: "31:01",
    endTime: "31:02",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "They are deflating at a decelerating rate, but they're still negative.",
    startTime: "31:03",
    endTime: "31:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So there isn't a lot of inflation problems.",
    startTime: "31:09",
    endTime: "31:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "People are still dealing with these high prices.",
    startTime: "31:11",
    endTime: "31:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So let's talk about commodity prices, which I've been kind of negative on since basically 2022.",
    startTime: "31:16",
    endTime: "31:23",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And we see that the red dotted line, that's the 200 day moving average of the Bloomberg commodity price.",
    startTime: "31:23",
    endTime: "31:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It just can't get above on a sustained basis.",
    startTime: "31:28",
    endTime: "31:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It's 200 day moving average and we're pretty far below the 200 day moving average right now, although it has been moving up in the most recent couple of weeks.",
    startTime: "31:31",
    endTime: "31:43",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The commodity price complex does not show an inflationary impulse and that must imply that there is not very good global growth.",
    startTime: "31:43",
    endTime: "31:54",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And that's true.",
    startTime: "31:54",
    endTime: "31:55",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "There are many countries in Europe that are in recession and the US is doing pretty well.",
    startTime: "31:55",
    endTime: "32:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "India is booming, which I've recommended as an equity investment for quite some time.",
    startTime: "32:01",
    endTime: "32:06",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But globally there's not a lot of economic growth.",
    startTime: "32:06",
    endTime: "32:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Let's talk about some parts of the treasury market.",
    startTime: "32:10",
    endTime: "32:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Here's just the chart on a 30 year US treasury bond, sort of a constant maturity sort of a thing, and we see that the yield got down to 70 basis points intraday, the all time low, and had a rise up of about 450 basis points or more.",
    startTime: "32:13",
    endTime: "32:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And we see we broke out of that channel.",
    startTime: "32:29",
    endTime: "32:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I've talked about this for years.",
    startTime: "32:30",
    endTime: "32:32",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We've broken out of this channel and we've seen a little bit of improvement.",
    startTime: "32:32",
    endTime: "32:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The yield did come down somewhat from the middle of October of last year.",
    startTime: "32:35",
    endTime: "32:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But amazingly, if you own the 30 year treasury at its high point back in price, back in 2020, you're still underwater 46% on the price of that security.",
    startTime: "32:41",
    endTime: "32:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "A 46% loss.",
    startTime: "32:52",
    endTime: "32:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It was as bad as about 55%.",
    startTime: "32:53",
    endTime: "32:56",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We've had a nice price increase, but the hole was so big that we're still near the bottom of the hole, rather than getting more normalized.",
    startTime: "32:57",
    endTime: "33:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So we are not really seeing much of a movement in yields.",
    startTime: "33:07",
    endTime: "33:12",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Over the past few months, several weeks, I should say.",
    startTime: "33:12",
    endTime: "33:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "On a year to date basis, yields have been in a range.",
    startTime: "33:16",
    endTime: "33:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Depends what part of the curve you look at, but it's about 40 45 basis points or so, and we're about 1520 basis points closer to the high of the year to date period than the lows.",
    startTime: "33:19",
    endTime: "33:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But it's been very low volatility and that's allowed spreads of credit sectors to come in a lot.",
    startTime: "33:30",
    endTime: "33:37",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And we now see there's a narrative that's going around that spreads are tight, but that's okay because people are indifferent to spreads.",
    startTime: "33:37",
    endTime: "33:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "They just like the yields because the treasury base case yield is somewhere around four and a quarter percent and you can throw on 300 basis points of high yield and it's a very high yield's a little wider than that.",
    startTime: "33:45",
    endTime: "33:57",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But if you just throw on 300 basis points of yield to the treasury spread, you'd be up at seven and a quarter percent.",
    startTime: "33:57",
    endTime: "34:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so the new narrative is, well, people don't care about the spread, they just care about that seven and a quarter percent.",
    startTime: "34:03",
    endTime: "34:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "They like that.",
    startTime: "34:08",
    endTime: "34:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that's dangerous because it shows a sign of complacency when people just say, I don't really care about valuation anymore.",
    startTime: "34:09",
    endTime: "34:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "All I care about in the case of some high flying risk investments is momentum.",
    startTime: "34:16",
    endTime: "34:21",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And when it comes to the lower parts of the credit market and bonds, they say, well, at least the absolute yield is acceptable to me.",
    startTime: "34:21",
    endTime: "34:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I've seen that strategy end badly multiple times in my career.",
    startTime: "34:30",
    endTime: "34:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Here's the Bloomberg investment grade agrippa bond index, the so called yield to worst, and we can see that the rate rise was pretty severe, 470 basis points, and we're still pretty elevated yields at 4.76%.",
    startTime: "34:35",
    endTime: "34:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So you can get yields in a very safe way with things like mortgage backed securities or the total return bond fund, where you're getting yields that are closer to the 6% than a 5%.",
    startTime: "34:50",
    endTime: "35:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so you can get that advantage without taking a lot of risk.",
    startTime: "35:01",
    endTime: "35:04",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "In the investment grade bond market, I always look at the copper gold ratio, even when it's completely not working, which has been the case since basically, in a certain sense, since the lockdowns.",
    startTime: "35:04",
    endTime: "35:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So we see that the blue line is the copper gold ratio dividing the price of copper by the price of gold.",
    startTime: "35:16",
    endTime: "35:21",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And over the past year, the copper gold ratio has declined to nearly a new local low, or perhaps one.",
    startTime: "35:21",
    endTime: "35:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And we see that the copper gold ratio, the ten year treasury yield, has gone up over that time period.",
    startTime: "35:29",
    endTime: "35:34",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But just like in 2021, there was a big difference between the two that got closed fairly quickly in 2022.",
    startTime: "35:34",
    endTime: "35:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "We now see that big gap.",
    startTime: "35:42",
    endTime: "35:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So either we're going to see commodities go down, or we're going to see either see copper go up and gold go down, or we're going to see yields come down.",
    startTime: "35:44",
    endTime: "35:56",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "We'll see what happens.",
    startTime: "35:56",
    endTime: "35:56",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But this has not worked at all over the past, I'd say year.",
    startTime: "35:56",
    endTime: "36:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Let's talk about the bond market.",
    startTime: "36:01",
    endTime: "36:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's some credit market metrics.",
    startTime: "36:03",
    endTime: "36:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is just year to date as of March 4.",
    startTime: "36:05",
    endTime: "36:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So we see that the big winner is CMBS BBB, something that I recommended pretty strongly in the past couple of webcasts.",
    startTime: "36:08",
    endTime: "36:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's the number one performer, up 6.7%.",
    startTime: "36:16",
    endTime: "36:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Now we see loans down in the triple c category are up 4.3.",
    startTime: "36:19",
    endTime: "36:23",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's a pretty big return for CCC bank loans.",
    startTime: "36:23",
    endTime: "36:27",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Then we see BBB Clos, which are repackaged.",
    startTime: "36:27",
    endTime: "36:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Bank loans are doing just as well as the junkie bank loans.",
    startTime: "36:30",
    endTime: "36:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So that's been a good risk adjusted area to be.",
    startTime: "36:33",
    endTime: "36:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And then you got a lot of one and a half percenters in various parts of high yield double b loans, AAA Clos.",
    startTime: "36:36",
    endTime: "36:43",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And then you've got the high yield stuff that's up a little bit, the fixed rate high yield bonds.",
    startTime: "36:44",
    endTime: "36:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And then you've got the investment grade stuff, which is not doing well.",
    startTime: "36:50",
    endTime: "36:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We see investment grade aaa's, there aren't very many of them, but that's the worst performing sector in the bond market this year.",
    startTime: "36:53",
    endTime: "37:00",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And then we see investment grade double as there's some of those, that's second worst.",
    startTime: "37:00",
    endTime: "37:04",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And then we see agency rmbs is down about 1.8.",
    startTime: "37:04",
    endTime: "37:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Interestingly, the Bloomberg treasury index is only down 1.4.",
    startTime: "37:08",
    endTime: "37:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That's a reversal of what it looked like last year when corporate credit outperformed by a lot.",
    startTime: "37:13",
    endTime: "37:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That seems to have pretty much run its course, although most of these losses are not due to anything other than duration, the fact that interest rates have risen on the various key rates on which these bonds are issued.",
    startTime: "37:19",
    endTime: "37:32",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Now let's take a look a little deeper in the weeds.",
    startTime: "37:32",
    endTime: "37:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is the high yield market.",
    startTime: "37:35",
    endTime: "37:37",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is the double b spread versus the triple b spread.",
    startTime: "37:37",
    endTime: "37:39",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So if you go down one notch in quality from BBB investment grade to the first tier of junk bond double b, how much are you getting paid to do it?",
    startTime: "37:39",
    endTime: "37:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The answer is, historically not very much.",
    startTime: "37:48",
    endTime: "37:51",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "We're at 80 basis points right now.",
    startTime: "37:51",
    endTime: "37:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The lowest on this display going back 20 years is 45 basis points.",
    startTime: "37:53",
    endTime: "37:58",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So there might be a little toothpaste left in the tube, but you notice when it got to 45 basis points and got near there again in 2007 or so, you notice it didn't last very long and it bounced up pretty quickly.",
    startTime: "37:58",
    endTime: "38:12",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So this would be a bad environment to be dipping down in the double b corporates out of triple B corporates, in my opinion.",
    startTime: "38:12",
    endTime: "38:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Now we'll take a look at the internal spread in the high yield market from the double b, which is the highest rated junk bond rating, and triple c, which is the lowest.",
    startTime: "38:19",
    endTime: "38:29",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's not in default.",
    startTime: "38:29",
    endTime: "38:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And we say that this has narrowed, but nowhere near as much.",
    startTime: "38:30",
    endTime: "38:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This has come down from about 850 basis points down to 550.",
    startTime: "38:34",
    endTime: "38:38",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So it's in 300, but it's certainly not historically super low.",
    startTime: "38:38",
    endTime: "38:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I'm not really saying that this is a good time to be going into CC corporates because the reason this spread is so wide is the market has begun to anticipate defaults.",
    startTime: "38:43",
    endTime: "38:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Fed has been vocal about hire for longer, and one of the ways in which that works to slow the economy and bring inflation down and have the Fed then cut interest rates is by having defaults, by having marginal players in the economy.",
    startTime: "38:52",
    endTime: "39:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Unfortunately, they're often medium and small businesses end up getting squeezed by these interest rates.",
    startTime: "39:10",
    endTime: "39:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Bank loan borrowers as a total were borrowing at about a 4% interest rate three years ago, and many of them now have to borrow at a 12% interest rate.",
    startTime: "39:16",
    endTime: "39:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And those are loans that reprice every 90 days.",
    startTime: "39:25",
    endTime: "39:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So they're paying that big interest rate right now, and they've been paying it, and they're going to have to keep paying it unless the Fed cuts interest rates.",
    startTime: "39:28",
    endTime: "39:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that will be the mechanism by which the unemployment rate will begin to go up at a more rapid clip that perhaps, as I talked about earlier, has begun.",
    startTime: "39:35",
    endTime: "39:43",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's agency mortgage spreads.",
    startTime: "39:43",
    endTime: "39:45",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "This is just the guaranteed mortgages, and they're wide.",
    startTime: "39:46",
    endTime: "39:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "They're wider than a 25 year average.",
    startTime: "39:49",
    endTime: "39:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "They're in from nearly really 200 basis points when the market was avalanche with supply back in the middle of last year.",
    startTime: "39:52",
    endTime: "39:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But now there's not very much supply in the market because existing home sales and home sales broadly are very slow thanks to the high interest rates and the high home prices.",
    startTime: "39:59",
    endTime: "40:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But we're still at 144 basis points, as I've pointed out in past webcasts.",
    startTime: "40:09",
    endTime: "40:14",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That's with the prices of mortgages no longer at premiums, we have to worry about getting paid off early.",
    startTime: "40:14",
    endTime: "40:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "They're at discounts.",
    startTime: "40:19",
    endTime: "40:21",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So you don't have any extension risk in the mortgage market because prepayment rates are very slow and you don't have negative convexity in the mortgage market, which means that you have as much upside as downside for a symmetric move interest rates.",
    startTime: "40:21",
    endTime: "40:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that's a really great attribute that is rare over the past 35 years of the agency guaranteed mortgage market.",
    startTime: "40:34",
    endTime: "40:42",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So these are really attractive.",
    startTime: "40:42",
    endTime: "40:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "They've lagged the corporate bond market thanks to the demand for corporate bonds and the lack in the quantitative tightening, perhaps that's going on with the Fed, but these are very attractive on an absolute basis and a risk adjusted basis.",
    startTime: "40:47",
    endTime: "41:01",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Look at some other asset classes, we'll see the improvements.",
    startTime: "41:02",
    endTime: "41:04",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "We've got the black line, which is the Bloomberg CMBS index.",
    startTime: "41:05",
    endTime: "41:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's a AAA rated index.",
    startTime: "41:09",
    endTime: "41:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And we see that spread is in a little bit.",
    startTime: "41:11",
    endTime: "41:14",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But look at that purple line.",
    startTime: "41:14",
    endTime: "41:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "That's the CLO triple A index.",
    startTime: "41:15",
    endTime: "41:17",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And that's in a lot.",
    startTime: "41:17",
    endTime: "41:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I mean, that's in 100 basis points over the past year or so.",
    startTime: "41:19",
    endTime: "41:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We saw the very good performance that has continued this year with Clos doing very well.",
    startTime: "41:22",
    endTime: "41:27",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And that's something that we own in lieu of corporate bonds.",
    startTime: "41:27",
    endTime: "41:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And there's been good outperformance there year to date as the fund is off to a very strong start here in 2024.",
    startTime: "41:30",
    endTime: "41:36",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think we're hoping to have an advantage of 100 basis points this quarter alone.",
    startTime: "41:36",
    endTime: "41:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think we're about 70 right now, so we're moving in a very good direction.",
    startTime: "41:41",
    endTime: "41:46",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Here's CMBS versus corporates.",
    startTime: "41:46",
    endTime: "41:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Just check into it.",
    startTime: "41:49",
    endTime: "41:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "CMBs is when they're, when you're above the red dotted line, CMBs is cheaper.",
    startTime: "41:50",
    endTime: "41:55",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "The AAA's are much cheaper than they've typically been versus AAA rated corporates.",
    startTime: "41:55",
    endTime: "42:00",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Then we see single a CMS versus triple B corporates, and we see there that we're still very wide.",
    startTime: "42:00",
    endTime: "42:06",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "CMBS remains cheap even though that spread has come in.",
    startTime: "42:06",
    endTime: "42:09",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "There's room for this to improve.",
    startTime: "42:10",
    endTime: "42:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Although one does not want to index in the CMBS market, you want to be very careful in underwriting because you don't want urban office concentration.",
    startTime: "42:11",
    endTime: "42:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That problem is nowhere near solved and it's going to be a long slog to get that to improve.",
    startTime: "42:21",
    endTime: "42:26",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So we have a very strong, as I think everyone in the industry knows, CMBS team, and we've had fantastic performance.",
    startTime: "42:27",
    endTime: "42:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We have an ETF that just does cmbs and outperformed a CMBS index last year by over 300 basis points.",
    startTime: "42:33",
    endTime: "42:41",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Just to round things out, here's emerging markets and what their yields look like.",
    startTime: "42:43",
    endTime: "42:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That spread was hanging out at about 500 basis points for quite a while in 2022 into 2023, and then finally with the risk rally that started November 1 with the Fed's rhetorical pivot, we really saw emerging markets finally join the risk asset party, and we ended up having a pretty good experience in the second part of last year.",
    startTime: "42:48",
    endTime: "43:10",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Although total return bond fund does not own emerging market bonds, but our emerging market bond fund obviously does, and our core DBLFX also owns emerging markets, although we're not at a maximal position at all, because we'd be waiting for the dollar to weaken to get bullish in that regard.",
    startTime: "43:10",
    endTime: "43:28",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So with that, I'm going to turn it over to Andrew sue, who's going to go through the total return of bond fund in detail, and I'll be back to answer thematically the many hundreds of questions already got, and I'll go through them and I'll be back to answer some of them, and we'll wrap up Andrew, take it away.",
    startTime: "43:28",
    endTime: "43:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Yeah, thanks a lot, Jeffrey.",
    startTime: "43:45",
    endTime: "43:46",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And you spoke a bit about commercial real estate, and I'm going to pick up where you kind of left off there on this next slide.",
    startTime: "43:47",
    endTime: "43:56",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Looking at commercial real estate, I mean, there are still, there's a lot of challenges out there in the market, still within the space, but in terms of delinquencies, more recently, we've seen delinquency levels plateau in pretty much all categories other than the office sector.",
    startTime: "43:57",
    endTime: "44:13",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Our base case that delinquencies will continue to rise here.",
    startTime: "44:13",
    endTime: "44:17",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "It will be led by the office segment of the market.",
    startTime: "44:17",
    endTime: "44:20",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "But you may have some dampening effects from the stronger subsegments, such as industrials.",
    startTime: "44:20",
    endTime: "44:25",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "But the base case expectation is that we will see further degradation within the commercial real estate space.",
    startTime: "44:25",
    endTime: "44:32",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Now, there's really been a dearth of transaction volume in the commercial real estate space, and without the transactions, there's really not as much market clarity.",
    startTime: "44:32",
    endTime: "44:44",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And as market clarity becomes murky, this has led to some unfair assumptions we would say that we're starting to see in the market, or we have seen the market.",
    startTime: "44:44",
    endTime: "44:53",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "One example is only several months ago, investors in this space, they operated on a blanket assumption that essentially all commercial real estate loans coming due would be unable to pay off at maturity.",
    startTime: "44:53",
    endTime: "45:06",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Well, on this page we're showing this conduit segment of the CMBS market, and the bars here represent what percentage of loans are paying off at maturity.",
    startTime: "45:06",
    endTime: "45:17",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Pre COVID, these numbers were in the 90% range, meaning 90% of the loans that came due were essentially paid off.",
    startTime: "45:17",
    endTime: "45:23",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Now, despite all the headwinds that we have seen recently, rate hikes and such, in 2023, we see that 80% of commercial real estate loans that came due were paid off.",
    startTime: "45:23",
    endTime: "45:33",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "The 20% that didn't pay off doesn't necessarily mean they were defaulted.",
    startTime: "45:34",
    endTime: "45:38",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "As a matter of fact, many of them have been provided extension options so they can find a better exit outcome on the back end of this really troubling time in the market.",
    startTime: "45:39",
    endTime: "45:49",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Now, recently we've seen some of the punitive expectations being dialed back by market.",
    startTime: "45:49",
    endTime: "45:54",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Jeffrey showed earlier some of the very strong returns within the CMBS market.",
    startTime: "45:54",
    endTime: "45:58",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "CMBS investments have done very well, I'd say, over the last three or four months, especially at the senior level, and we'll continue to watch the data to see if there's any other relaxing of these really punitive assumptions that are out there.",
    startTime: "45:58",
    endTime: "46:14",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Some of you may have been surprised by the payoff rate that we saw in commercial real estate last year in the previous slide.",
    startTime: "46:16",
    endTime: "46:23",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "But what's even more impressive is, I would say that this happened against the backdrop of very low CMBS bond issuance.",
    startTime: "46:23",
    endTime: "46:31",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "So in 2023, you can see some of the volume here.",
    startTime: "46:31",
    endTime: "46:35",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Across the different years, the pace of rate hikes been lending a real challenge, but expectations is for CMBS issuance to rebound this year.",
    startTime: "46:35",
    endTime: "46:44",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "We've already seen $15 billion of issuance just in the first two months.",
    startTime: "46:45",
    endTime: "46:49",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "If this keeps up, it certainly would be positive for the market and likely increased appetite for lenders to perhaps step back into this market.",
    startTime: "46:49",
    endTime: "46:57",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "If this does continue to play out this way, it would further dispel this whole notion of mass extensions within this market.",
    startTime: "46:57",
    endTime: "47:03",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And certainly that would be a catalyst potentially for higher valuations within this space.",
    startTime: "47:03",
    endTime: "47:09",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Two charts on this page on the left, the pie chart shows the percentage of the double line total return bond fund exposed to commercial mortgage backed securities.",
    startTime: "47:11",
    endTime: "47:21",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "This is as of February, month end.",
    startTime: "47:22",
    endTime: "47:24",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And you can see that there's 7.3% total exposure into commercial real estate in the fund at this point in time.",
    startTime: "47:24",
    endTime: "47:32",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And this is just the sum of the dark gray and the beige segment of the Dupai.",
    startTime: "47:32",
    endTime: "47:37",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "We've had a lot of questions from investors about office exposure in particular, and justifiably so.",
    startTime: "47:38",
    endTime: "47:43",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "So we further separated out the office exposure within the portfolio, and that's less than 2%, 1.7% of the total fund.",
    startTime: "47:43",
    endTime: "47:49",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "So not very much at all.",
    startTime: "47:49",
    endTime: "47:50",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Now, on the right side of the page depicts our commercial real estate holdings by asset type.",
    startTime: "47:50",
    endTime: "47:57",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "I'm not going to get into the nuances of each one, but the takeaway here is that you can access this market in a defensive manner and still achieve very attractive returns.",
    startTime: "47:57",
    endTime: "48:06",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "So to visually depict this resilience, I just want you to draw your attention to the bars over conduit, SASB and Cre CLO investments.",
    startTime: "48:06",
    endTime: "48:16",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "You would need the blue bar to completely be eroded away by losses before you're at risk of losing even a dollar principle.",
    startTime: "48:16",
    endTime: "48:24",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And here we're comparing the beige bar to that blue bar, which is the 60 days or more delinquent.",
    startTime: "48:24",
    endTime: "48:29",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "So in all cases, the delinquent loans are only a fraction of the overall credit enhancement or credit protection here.",
    startTime: "48:29",
    endTime: "48:36",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "So these positions are very well protected at this time.",
    startTime: "48:36",
    endTime: "48:39",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "The table immediately below you can see that these positions are at discount dollar prices.",
    startTime: "48:39",
    endTime: "48:44",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And even factoring in for losses in our base case, our expectations are close to double digit returns for these investments.",
    startTime: "48:44",
    endTime: "48:52",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Shifting gears here, now we'll take a look at the residential mortgage market.",
    startTime: "48:56",
    endTime: "49:01",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Here we're looking at convexity of two different indices, mortgage backed securities index.",
    startTime: "49:01",
    endTime: "49:07",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "So the MBS index in black and then the agency CMO index in blue.",
    startTime: "49:07",
    endTime: "49:11",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "In the mortgage market, we use the term convexity and it's a measure of essentially upside to downside risk.",
    startTime: "49:12",
    endTime: "49:18",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And if you compare where the indices were back in 2021 to their location now, both of these indices are showing considerably better convexity or optionality today.",
    startTime: "49:18",
    endTime: "49:29",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Between the two agency cmos, they offer the most positive optionality currently.",
    startTime: "49:30",
    endTime: "49:34",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And this is really where the yellow dotted line comes into play.",
    startTime: "49:34",
    endTime: "49:37",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "The yellow dotted line is showing the funds allocation to cmos over time.",
    startTime: "49:37",
    endTime: "49:41",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "So Dvltx's allocation to CMOs over time.",
    startTime: "49:41",
    endTime: "49:44",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "As a reminder, similar to most generic, the most generic agency mortgage backed investment cmos are also government guaranteed.",
    startTime: "49:45",
    endTime: "49:55",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "They are aaa rated investments.",
    startTime: "49:55",
    endTime: "49:57",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "The one difference I would point out is that they are or there are some structural elements to cmos that give us the ability to manage both rate and spread exposure in a more nuanced fashion.",
    startTime: "49:57",
    endTime: "50:08",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "We've been investing in cmos for over the last three decades.",
    startTime: "50:08",
    endTime: "50:12",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "It's fair to say that we're quite experienced in this space, and as we increase allocation, clearly we're seeing some tremendous value in this market.",
    startTime: "50:12",
    endTime: "50:21",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Hence the focus on agency cmos rather than just generic pass through securities within the mortgage backed securities market.",
    startTime: "50:21",
    endTime: "50:29",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "On this page we're taking a look at the components of the total return bond fund.",
    startTime: "50:30",
    endTime: "50:34",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And these are the red diamonds, and we compare them to the yields across the entirety of the treasury curve.",
    startTime: "50:34",
    endTime: "50:41",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "And this is depicted with the blue line across the screen.",
    startTime: "50:41",
    endTime: "50:45",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Often we talk about the barbell nature of the fund, where we're balancing interest rate risk or interest rate exposure with spread from the credit components within the portfolio.",
    startTime: "50:45",
    endTime: "50:56",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "On this chart, everything to the left of the five year part of the curve is our credit exposure.",
    startTime: "50:56",
    endTime: "51:02",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "These are assets that are positioned towards the front end of an inverted treasury curve, so they are benefiting from the higher short term rates and they contribute attractive yields to the overall portfolio.",
    startTime: "51:02",
    endTime: "51:14",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "One thing to note though, we have been focusing on higher quality assets, but we haven't had to sacrifice yield as spreads are quite wide in the structured credit space.",
    startTime: "51:15",
    endTime: "51:25",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "We're able to obtain pretty attractive spreads and yields in certain pockets of structured credit markets today.",
    startTime: "51:25",
    endTime: "51:32",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "To the right, as a five year part of the curve, we're looking for assets that contribute yield, but also add this positive optionality to the portfolio.",
    startTime: "51:32",
    endTime: "51:40",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "I spoke about it just on the previous slide.",
    startTime: "51:40",
    endTime: "51:42",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Government guaranteed mortgage backed securities are uniquely positioned to offer this now and then in conjunction with the structured credit assets that we've been buying.",
    startTime: "51:42",
    endTime: "51:51",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "These do pair very well to create a portfolio that offers attractive yield, but also tremendous upside potential via price appreciation.",
    startTime: "51:52",
    endTime: "52:00",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Looking at just a snapshot of the fund in comparison versus the index, a few notable points here.",
    startTime: "52:03",
    endTime: "52:09",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "First, discount dollar price for both the fund and the index, but we'll see in just 1 minute much of the discount securities that make up the total return bond fund are in the government guaranteed mortgage space.",
    startTime: "52:09",
    endTime: "52:21",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "So you know, in the past a lot of people are concerned about prepayment risk, and that historically has been a risk to the mortgage market.",
    startTime: "52:22",
    endTime: "52:28",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "It's actually a very big incentive now for our investors because these are government guaranteed assets and the nature of that dictates that they will be repaid at par.",
    startTime: "52:28",
    endTime: "52:39",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Prepayments on discount security essentially gets you back to 100 cents on the dollar faster, and that certainly is a positive on the duration side, slightly shorter versus that of the index.",
    startTime: "52:39",
    endTime: "52:50",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "We've been actively managing duration using some of the agency CMO positions and unlike just using treasuries to manage duration, this does give us access to duration, but also contributes additional spread for our government guaranteed asset as well.",
    startTime: "52:50",
    endTime: "53:06",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Last thing I would point out is just the yield advantage of 130 basis points.",
    startTime: "53:07",
    endTime: "53:11",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "We are using high quality credit assets at the front end of the curve and this has been a really big contributor in terms of adding some additional yield to the overall portfolio.",
    startTime: "53:11",
    endTime: "53:20",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Looking a little bit closer at duration over time.",
    startTime: "53:21",
    endTime: "53:24",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "We have come off our historical peak in duration back in the fourth quarter of 2023.",
    startTime: "53:24",
    endTime: "53:29",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "You can see it here, but our goal here has been to deliver the best risk adjusted return to our investors.",
    startTime: "53:29",
    endTime: "53:37",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "What we don't see is the duration of the index.",
    startTime: "53:37",
    endTime: "53:40",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Historically, we have always been shorter than that of the index, or I should say at least not meaningfully longer than that of the index, and that has helped us generate attractive returns with lower volatility.",
    startTime: "53:41",
    endTime: "53:52",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "As mentioned, portfolio positioning we are focused on quality.",
    startTime: "53:54",
    endTime: "53:58",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Majority investments are in government guaranteed assets.",
    startTime: "53:58",
    endTime: "54:01",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Agency mortgage backed securities are particularly attractive now and hence the overweight.",
    startTime: "54:01",
    endTime: "54:06",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "And these are the agency pass throughs, agency cmos and even the agency CMbs that we include in our mandate.",
    startTime: "54:06",
    endTime: "54:13",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "The credit in the portfolio very well diversified, also with the focus higher in the capital structure, so very protected as well.",
    startTime: "54:14",
    endTime: "54:21",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Last slide for me before I hand this back to Jeffrey.",
    startTime: "54:22",
    endTime: "54:25",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Similar study we did with the CMBS earlier.",
    startTime: "54:25",
    endTime: "54:27",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Here we're looking at the entirety of the credit book.",
    startTime: "54:28",
    endTime: "54:31",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Credit protection is shown in the blue bars and then serious delinquencies in red.",
    startTime: "54:31",
    endTime: "54:36",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "All sectors do have considerably more protection than loss expectations.",
    startTime: "54:36",
    endTime: "54:41",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "Structured credit, it continues to offer relatively wide spread versus other areas of fixed income, so we can maintain a yield advantage while moving up in quality and having a really resilient investment portfolio if in the case the economy turns.",
    startTime: "54:41",
    endTime: "54:56",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence:
      "So with that, perhaps I'll hand it back to Jeffrey here and address some of the questions that have been coming in.",
    startTime: "54:56",
    endTime: "55:02",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Thank you.",
    startTime: "55:02",
    endTime: "55:03",
    speaker_name: "Moderator",
    speaker_id: 0,
  },
  {
    sentence: "Thanks, Andrew.",
    startTime: "55:04",
    endTime: "55:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Yep.",
    startTime: "55:05",
    endTime: "55:06",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I see some themes in the questions here.",
    startTime: "55:06",
    endTime: "55:08",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "One of them is less of a theme, but I can answer it anyway.",
    startTime: "55:08",
    endTime: "55:11",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that is, do I still think we're in the fourth turning, and if so, which inning?",
    startTime: "55:12",
    endTime: "55:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think if you understand the four turnings and Neil Howe's book, the fourth, 4th turning is here, is out now.",
    startTime: "55:16",
    endTime: "55:22",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I mean, it's pretty obvious that we're in a fourth turning.",
    startTime: "55:22",
    endTime: "55:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that means I talked about this for years and years, that the institutions that have been in place for generations will be challenged.",
    startTime: "55:26",
    endTime: "55:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And I think everybody can agree one thing, that those institutions are being challenged and will continue to be under pressure, and we're going to have to restructure our unfunded liabilities or debase them, one or the other.",
    startTime: "55:33",
    endTime: "55:48",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that's coming, and it's not coming in a generation, it's coming in the next several years at the most.",
    startTime: "55:48",
    endTime: "55:55",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So the fourth turning will turn into the first turning, which will be a great thing, hopefully, but it should be a great thing because we'll get our house in order and our productive capacity and distribution of wealth in sync.",
    startTime: "55:55",
    endTime: "56:10",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And that should be coming, really, I'm going to say, by 2032, I would say at the latest.",
    startTime: "56:10",
    endTime: "56:16",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So it speeds up.",
    startTime: "56:16",
    endTime: "56:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think the fourth turning doesn't last as long as the prior ones because there's so much need for change that it just has to suddenly happen.",
    startTime: "56:19",
    endTime: "56:27",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "At first it starts like the sun also rises.",
    startTime: "56:27",
    endTime: "56:30",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "How'd you go bankrupt?",
    startTime: "56:30",
    endTime: "56:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "It starts gradually and then suddenly.",
    startTime: "56:31",
    endTime: "56:34",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So that's where we are.",
    startTime: "56:34",
    endTime: "56:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Someone says, when rates were at historic lows, why do you suppose the government didn't issue debt at those low rates?",
    startTime: "56:36",
    endTime: "56:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Bad management.",
    startTime: "56:45",
    endTime: "56:46",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think short term considerations dominated because short term interest rates were basically at zero.",
    startTime: "56:46",
    endTime: "56:53",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And so, yeah, you could have locked in 30 years at 2% interest cost, but 2% is higher than zero.",
    startTime: "56:53",
    endTime: "57:02",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And so I think it was a big mistake.",
    startTime: "57:02",
    endTime: "57:04",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I agree with theme of this question.",
    startTime: "57:04",
    endTime: "57:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "One could say cut them a little slack by saying, well, if they'd issued a lot of debt longer, maybe long rates would have gone up more, and that would have hurt things.",
    startTime: "57:07",
    endTime: "57:15",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I mean, maybe that factored into it as well.",
    startTime: "57:15",
    endTime: "57:18",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Someone says, this is a theme that's prominent here.",
    startTime: "57:18",
    endTime: "57:23",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Is there a possible scenario where short term rates go down from Fed policy, but longer term rates go up due to inflation and excessive deficit spending.",
    startTime: "57:23",
    endTime: "57:32",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Essentially my base case, but not the next move in the chess game.",
    startTime: "57:33",
    endTime: "57:37",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think the economy is certain to weaken, as we saw in all of those economic charts I showed, and I think that will, the Fed is talking about cutting interest rates.",
    startTime: "57:37",
    endTime: "57:47",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "We're down to about three now, three and a half on the warp, but we'll see.",
    startTime: "57:48",
    endTime: "57:52",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So short term interest rates should probably come down, but then I think there'll be an aha moment.",
    startTime: "57:52",
    endTime: "57:57",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Maybe it'll, maybe the ten year will drop down.",
    startTime: "57:57",
    endTime: "57:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Someone asked, do I think it's going to 3% on the ten year?",
    startTime: "57:59",
    endTime: "58:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I don't think it's going to three.",
    startTime: "58:03",
    endTime: "58:04",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It might go to three and a quarter, but I think at some point around that three and a quarter yield level, or three to three and a quarter to three and a half, people are going to have and have a crack of doom moment where they realize what's going on or needs to go on.",
    startTime: "58:04",
    endTime: "58:20",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Related to the question that maybe the yield curve will get very steep because nobody will want to own anything but a very high real interest rate on the long end.",
    startTime: "58:20",
    endTime: "58:31",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And the inflationary policy response could very easily be very family identity, same as the last two recessions where they collapse interest rates.",
    startTime: "58:31",
    endTime: "58:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But the deficit goes way up, and people start to realize that we can't afford that interest expense.",
    startTime: "58:44",
    endTime: "58:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "If we get a recession by 2028, we're going to be talking about this problem.",
    startTime: "58:50",
    endTime: "58:55",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "That interest expense will go to 30, 40, 50%, potentially, of tax receipts under today's tax code, which, of course, can be changed.",
    startTime: "58:56",
    endTime: "59:05",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Everything can be changed.",
    startTime: "59:05",
    endTime: "59:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I've come to learn as I've gotten older, when you're twelve years old, you think nothing's ever going to change.",
    startTime: "59:07",
    endTime: "59:13",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And then when you get to a certain middle age, I don't know, say 45 or 50, you start to realize that exactly the opposite is true.",
    startTime: "59:13",
    endTime: "59:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Everything can change.",
    startTime: "59:19",
    endTime: "59:21",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So the treasury debt can be restructured in radical ways.",
    startTime: "59:21",
    endTime: "59:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I've talked about this in speeches.",
    startTime: "59:24",
    endTime: "59:25",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I'm not going to go into it a lot now, but if you come to any of my events where I speak live in front of a couple thousand people, we often talk about the math of what's going on here, which I did go through a little bit in my just markets webcast.",
    startTime: "59:25",
    endTime: "59:40",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And then finally, this brings up a good point.",
    startTime: "59:40",
    endTime: "59:44",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "There's been a lot of immigrant job growth, a lot of immigration in the country, some legal, but most of it not.",
    startTime: "59:44",
    endTime: "59:50",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But they say.",
    startTime: "59:50",
    endTime: "59:51",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "Could that be offsetting the chart you had regarding states with job losses?",
    startTime: "59:51",
    endTime: "59:56",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "No, they're counting jobs they're not counting people.",
    startTime: "59:56",
    endTime: "59:59",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So I don't think unemployment's going up.",
    startTime: "59:59",
    endTime: "01:00:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I mean, job growth spent being high would not lead to high unemployment.",
    startTime: "01:00:04",
    endTime: "01:00:07",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "But it is interesting that over the past three and a half years, under the Biden administration, there's been a shrinkage of us born jobs.",
    startTime: "01:00:08",
    endTime: "01:00:19",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "The number of jobs is actually down.",
    startTime: "01:00:19",
    endTime: "01:00:21",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And of course, the number of non us born is way up.",
    startTime: "01:00:21",
    endTime: "01:00:26",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "It's responsible for all of the job growth, which is really kind of a remarkable statistic.",
    startTime: "01:00:26",
    endTime: "01:00:32",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "But I do think the baby boomers have something to do with that.",
    startTime: "01:00:32",
    endTime: "01:00:35",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I think a lot of the reasons that the domestically born number is going down is we have a lot of retirements in the baby boomer cohort, and they're really not being replaced at the same level.",
    startTime: "01:00:35",
    endTime: "01:00:46",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "So thank you for your attention.",
    startTime: "01:00:46",
    endTime: "01:00:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "Today.",
    startTime: "01:00:49",
    endTime: "01:00:49",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "I remain very heavily invested in many of my firm's funds, but one that has my largest allocation by a lot is the double line total return bond fund.",
    startTime: "01:00:49",
    endTime: "01:01:00",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "And I remain extremely comfortable.",
    startTime: "01:01:00",
    endTime: "01:01:03",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence: "I'm very concerned about risk with my own personal investments.",
    startTime: "01:01:03",
    endTime: "01:01:06",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "So we have delivered very high risk adjusted returns in the total return bond fund and the strategy that preceded it at another firm for a very long time.",
    startTime: "01:01:06",
    endTime: "01:01:17",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "And I look forward to continuing that as we move forward into what started out very strongly for 2024.",
    startTime: "01:01:17",
    endTime: "01:01:24",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
  {
    sentence:
      "With that, I'm going to say good evening to you all, and thank you for paying attention, and thank you for your interest and support of double line, and goodbye.",
    startTime: "01:01:25",
    endTime: "01:01:33",
    speaker_name: "Jeff Gundlach",
    speaker_id: 2,
  },
];

const summary = [
  {
    name: "Header",
    title: "DoubleLine Total Return Bond Webinar",
    date: "March 14, 2024",
    presenters: ["Jeffrey Gundlach", "Andrew Hsu"],
  },
  {
    name: "Strategy Overview",
    points: [
      "Management style: actively managed to maximize total return while minimizing risk",
      "Investment philosophy: generate attractive risk-adjusted returns through a flexible, top-down approach",
      "Investment process: macro analysis, relative value sector positioning, bottom-up security selection",
      "Investment team leadership: PM Jeffrey Gundlach, Deputy PM Andrew Hsu",
      "Team experience: extensive fixed income market experience, averaging over 20 years",
      "Team stability: stable team with low turnover, Gundlach and Hsu have worked together for over 10 years",
      "No changes to the team mentioned",
    ],
  },
  {
    name: "Portfolio Positioning",
    points: [
      "Focus: defensively positioned in high quality structured credit and agency MBS",
      "Majority of investments in government-guaranteed assets, with agency MBS particularly attractive",
      "Credit portion is well-diversified with a focus on higher quality and structured credit",
      "CMBS exposure: 7.3% of fund, with only 1.7% in office; seeing value in CRE debt",
      "Maintains attractive yield with upside potential from discount dollar prices",
      "Came off historically high duration position but still maintaining advantage vs index",
      "Yield advantage of 130bps vs benchmark driven by high quality credit and agency MBS",
      "No explicit discussion of currency or liquidity allocations",
    ],
  },
  {
    name: "Performance Review",
    points: [
      "No specific return figures provided for the fund",
      "Fund is off to a strong start in 2024, outperforming the benchmark by approx. 70bps",
      "Key contributors: mortgage-backed securities and structured credit",
      "Relative performance vs peer groups or broader asset classes not discussed",
      "YTD performance driven by higher quality exposures and shorter duration positioning",
    ],
  },
  {
    name: "Economic Outlook",
    points: [
      "Growing recession risks with inverted yield curve, weak consumer expectations, and potential uptick in unemployment",
      "Inflation moderating but still elevated, with shelter costs a concern; commodities not showing inflation",
      "Interest rates expected to remain higher; short-term rates may fall in recession but long-term rates at risk",
      "Growth sluggish globally; US still doing better than many international markets",
      "Consumers stressed with credit card usage up and rates increasing; could pressure spending",
      "No explicit discussion of employment or housing outlook",
    ],
  },
];
