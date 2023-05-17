import React, { useState, useEffect } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Meeting } from '../src/models';

const AddMeetingPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        await DataStore.save(
            new Meeting({
                "meetingDate": "2019-09-27Z",
                "speaker": "Hunter Brookshier",
                "title": "State of the Real Estate Market in Portland",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2019-10-25Z",
                "speaker": "Richard McGrew",
                "title": "Mortgage Note Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2019-11-15Z",
                "speaker": "Richard McGrew",
                "title": "Mortgage Note Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2019-11-22Z",
                "speaker": "Chris Tanner",
                "title": "Self Directed Retirement Accounts",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2019-12-06Z",
                "speaker": "Scott Maurer",
                "title": "Self Directed Retirement Accounts",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2019-12-13Z",
                "speaker": "David LaPlante",
                "title": "Researching Hyper Local Markets",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-01-17Z",
                "speaker": "Bernard Reisz and Sarah Sullivan",
                "title": "SIRAs and Real Estate Strategies",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-01-24Z",
                "speaker": "Scott Pastel",
                "title": "Marshall Reddick Turn Key Rentals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-01-31Z",
                "speaker": "Jerome Myers",
                "title": "Investor Mindsets",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-02-07Z",
                "speaker": "Travis Watts",
                "title": "Multifamily Investment Part 1",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-02-14Z",
                "speaker": "Tim Hubbard",
                "title": "Short term rentals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-02-21Z",
                "speaker": "Patrick Prunty",
                "title": "Turn-Key Single Family Home Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-02-28Z",
                "speaker": "Dr Eric Tait MD",
                "title": "Alternative Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-03-06Z",
                "speaker": "Daniel Holmlund",
                "title": "Real Estate Syndication Pt. 1",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-03-13Z",
                "speaker": "Daniel Holmlund",
                "title": "Real Estate Syndication Pt. 2",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-03-20Z",
                "speaker": "Stu Kerber",
                "title": "Investing in Farm Land in the Columbia River Valley",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-03-27Z",
                "speaker": "Kathy Fettke",
                "title": "State of the Economy",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-04-03Z",
                "speaker": "Mark Kenney",
                "title": "Value-Add apartments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-04-10Z",
                "speaker": "Sam Willson",
                "title": "Investing in Parking Lots",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-04-17Z",
                "speaker": "Kent Ritter",
                "title": "Building Community in Real Estate Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-04-24Z",
                "speaker": "Amanda Han  Matthew MacFarland",
                "title": "Tax Changes and the CARES Act",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-05-01Z",
                "speaker": "Courtney Buck",
                "title": "Wholesaling Properties",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-05-08Z",
                "speaker": "Joshua Plave",
                "title": "Self Directed Retirement Accounts",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-05-15Z",
                "speaker": "David Yoder",
                "title": "Fix and Flip Investing in Indianapolis",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-05-22Z",
                "speaker": "Brad St Onge",
                "title": "Investing in Farmland in South America",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-05-29Z",
                "speaker": "Whitney Sewell",
                "title": "Buying Real Estate with Partners - Syndication",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-06-05Z",
                "speaker": "Adiel Gorel",
                "title": "Buying Single Family Homes",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-06-12Z",
                "speaker": "Bob Bowman",
                "title": "Evaluating Commercial Office Space Deals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-06-19Z",
                "speaker": "Chace Fraser - Mr. House Hack",
                "title": "House Hacking",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-06-26Z",
                "speaker": "Daniel Holmlund",
                "title": "Ultimate Beginners Guide to Real Estate Investing Strategies",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-07-10Z",
                "speaker": "Larry Suter",
                "title": "Single Family Homes Short Term Rentals Ground Up Development Syndications",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-07-17Z",
                "speaker": "Fabiola Flueranvil",
                "title": "Entrepreneur shares her story breaking into the real estate investing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-07-24Z",
                "speaker": "Adam A Admas",
                "title": "How Hiring Virtual Assistants Can Scale Your Real Estate Business",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-07-31Z",
                "speaker": "Daniel Holmlund",
                "title": "How to Find and Buy Single Family Home Rentals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-08-07Z",
                "speaker": "Leka Devatha",
                "title": "Fix  Flips Seattle REI Scene",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-08-14Z",
                "speaker": "Gina Sapnar",
                "title": "REO Operations Manager for Redfin Corporation",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-08-21Z",
                "speaker": "Jason Thiele",
                "title": "Financial Equations for Predicting Your Return",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-08-28Z",
                "speaker": "Joseph Bramante",
                "title": "TriArc Real Estate Partners",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-09-04Z",
                "speaker": "Daniel Holmlund",
                "title": "Real Estate Investment Club 2.0",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-09-11Z",
                "speaker": "Teri Styers",
                "title": "Flipping and Rehabbing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-09-18Z",
                "speaker": "Milissa Ormiston",
                "title": "1031 Exchanges",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-09-25Z",
                "speaker": "Jerome Myers",
                "title": "Joint Ventures",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-10-02Z",
                "speaker": "Chirag Shah and Badri Malynur",
                "title": "Avestorinc.com",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-10-09Z",
                "speaker": "Tom Schneider and Amy Kirsch",
                "title": "Roofstock",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-10-10Z",
                "speaker": "REI Discussion Group",
                "title": "Open Discussion Group for Questions and Community",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-10-23Z",
                "speaker": "Agostino Pintus",
                "title": "How I Brought the Rockefeller Center in Indianapolis",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-10-30Z",
                "speaker": "Mike Taravella",
                "title": "Mike Taravella - Asset Management of Multifamily Properties",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-11-06Z",
                "speaker": "Sarah Kruse  Steve Barnes",
                "title": "Focus on the Portland Housing Market",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-11-13Z",
                "speaker": "Jillian Ivey Sidoti",
                "title": "Last Live Lived Real Estate Lawyer Who Focuses on Self Improvement Stories",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-11-20Z",
                "speaker": "Brian Briscoe",
                "title": "Active Duty Marine Lieutenant Colonel Invests in Real Estate",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-12-04Z",
                "speaker": "Landon Shaffer",
                "title": "Arizona Market Update Q4 2020",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2020-12-11Z",
                "speaker": "Daniel Holmlund",
                "title": "Long Distance Real Estate Investing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-01-08Z",
                "speaker": "Shannon Robnett",
                "title": "Ground Up Development in Boise ID",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-01-15Z",
                "speaker": "Kenny Wolfe",
                "title": "Triple Net Leases",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-01-22Z",
                "speaker": "REI Discussion Group",
                "title": "Single Family Homes",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-01-22Z",
                "speaker": "Andrea Duane",
                "title": "Folsom Market Update Q1 2021",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-01-29Z",
                "speaker": "Julie Holly",
                "title": "How to Keep Grounded While Doing It All",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-02-05Z",
                "speaker": "Logan Freeman",
                "title": "Confessions of a Real Estate Broker",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-02-12Z",
                "speaker": "Caleb Guilliams",
                "title": "The And Asset",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-02-19Z",
                "speaker": "Daniel Holmlund",
                "title": "Talk about LLCs",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-02-20Z",
                "speaker": "Jason Hartman",
                "title": "Macroeconomics - How Inflation make Debit An Asset",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-02-26Z",
                "speaker": "Kay Kay Singh",
                "title": "Multifamily Real Estate Key Concepts",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-03-05Z",
                "speaker": "Erica Neal",
                "title": "Infinite Banking",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-03-12Z",
                "speaker": "Tina Marie Andrea Duance and Andrew Bartley Katelynn Smith Richard McGrew and Daniel Holmlund",
                "title": "Round Table Discussion",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-03-19Z",
                "speaker": "David McIlwaine",
                "title": "The Emotional Journey of Evicting a Tenant",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-03-26Z",
                "speaker": "Mike Nuss",
                "title": "Portland Market Update",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-04-02Z",
                "speaker": "Tina Marie",
                "title": "Investing with Retirement Income",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-04-09Z",
                "speaker": "Patrick Lam",
                "title": "Qualified Opportunity Zones",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-04-16Z",
                "speaker": "Eng Taing",
                "title": "Qualified Opportunity Zones and BitCoin RE Funds",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-04-23Z",
                "speaker": "Richard McGrew",
                "title": "Investing in Mortgage Notes",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-04-30Z",
                "speaker": "David Long",
                "title": "Constructing an Outdoor Resort in Patagonia",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-05-07Z",
                "speaker": "Daniel Holmlund",
                "title": "Passive Investment Common Questions",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-05-14Z",
                "speaker": "Mo Bina",
                "title": "Industrial Real Estate",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-05-21Z",
                "speaker": "Andres Claux",
                "title": "Previously CrowdStreets Director of Asset Management",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-05-28Z",
                "speaker": "Justin Smith",
                "title": "How to Evaluate Your Passive Investment",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-06-04Z",
                "speaker": "Mike Butler",
                "title": "Landlording on Autopilot",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-06-11Z",
                "speaker": "Daniel Holmlund",
                "title": "1031 Exchanges",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-06-18Z",
                "speaker": "Manasa Rambhotla",
                "title": "Market and Submarket Analysis",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-06-25Z",
                "speaker": "Eli Vo Nathan Justus and Chris Gerstner",
                "title": "From Purchase to First Investor Distribution",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-07-09Z",
                "speaker": "Mike  Ligia Deaton",
                "title": "Buying and Selling Vacant Land",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-07-16Z",
                "speaker": "Daniel Weisfield",
                "title": "Mobile Home Parks",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-07-23Z",
                "speaker": "Edward Gray",
                "title": "Commercial Loans",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-07-30Z",
                "speaker": "Tracy and Keeley Hubbard",
                "title": "Investing in Texas Vineyards",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-08-06Z",
                "speaker": "Elenis Carmargo",
                "title": "Investing in Out-of-State Rental Properties",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-08-13Z",
                "speaker": "Daniel Holmlund",
                "title": "Should I ReFi",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-08-20Z",
                "speaker": "Brandon Hall",
                "title": "The Real Estate CPA",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-08-27Z",
                "speaker": "Eng Taing",
                "title": "Tax Minimizing Strategies",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-09-03Z",
                "speaker": "John Tapley",
                "title": "Borrow Against your RSUs to Buy Real Estate",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-09-10Z",
                "speaker": "Jules McKenzie",
                "title": "A Guide of Overcoming Obstacles",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-09-17Z",
                "speaker": "Mark Perlberg",
                "title": "Tax and Investment Strategies",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-09-24Z",
                "speaker": "Michael Morawski",
                "title": "Prison Turnaround to Coaching Others",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-10-01Z",
                "speaker": "Mark Willis",
                "title": "Not Your Average Real Estate Advice",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-10-08Z",
                "speaker": "Kevin Amolsch",
                "title": "Hard Money Lending",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-10-14Z",
                "speaker": "Michael Flight",
                "title": "Blackchain Real Estate",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-10-15Z",
                "speaker": "Ryland Moore",
                "title": "Water Rights and Climate Change",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-10-22Z",
                "speaker": "Carrick Sears",
                "title": "Broker in Arizona",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-10-29Z",
                "speaker": "David Mcllwaine",
                "title": "Walk Through of Apartment Complex Due Diligence",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-11-05Z",
                "speaker": "Jen Katsev and Ganga Tawady",
                "title": "Industrial Real Estate",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-11-12Z",
                "speaker": "Daniel Holmlund",
                "title": "SFH and MF Underwriting",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-11-19Z",
                "speaker": "Attendees",
                "title": "Attendee Group Discussion",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-12-03Z",
                "speaker": "Jason Thiele",
                "title": "Jason Thiele - Monetary Policy Fiscal Policy Flight to Quality",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-12-10Z",
                "speaker": "Jason Smolarek",
                "title": "Tools for Short Term Rentals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2021-12-17Z",
                "speaker": "Mike Wolf",
                "title": "Tax Deeds",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-01-07Z",
                "speaker": "Daniel Holmlund",
                "title": "Goal Setting and Open Discussion",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-01-13Z",
                "speaker": "Catherine Tindall",
                "title": "Prepping for Tax Seaon",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-01-14Z",
                "speaker": "Kyle Stanley",
                "title": "Short Term Rental Super Guests",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-01-20Z",
                "speaker": "Jeff Love",
                "title": "Legal Protection in Real Estate Investing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-01-21Z",
                "speaker": "Brian and Kati Greene",
                "title": "Short Term Rental Super Guests",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-01-27Z",
                "speaker": "Jamie Bateman",
                "title": "1st Lien Mortgage Note Investing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-01-28Z",
                "speaker": "Lee Yoder",
                "title": "Properties in Ohio",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-02-03Z",
                "speaker": "William L. Exeter",
                "title": "1031 1035 721 Exchanges 121 Exclusions",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-02-04Z",
                "speaker": "Micy Lui",
                "title": "Evaluating Passive Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-02-10Z",
                "speaker": "REI Discussion Group",
                "title": "Open Club Discusions",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-02-11Z",
                "speaker": "Daniel Holmlund",
                "title": "Researching New Real Estate Investment Markets - New Albany OH",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-02-18Z",
                "speaker": "Jennifer Beadles",
                "title": "Investing Out of State",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-02-25Z",
                "speaker": "Matt Fore",
                "title": "Sales Rep Ironman Competitor and Real Estate Investor",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-03-03Z",
                "speaker": "Christopher Nelson",
                "title": "Wealthward Capital",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-03-04Z",
                "speaker": "Chace Fraser",
                "title": "Mr House Hack",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-03-11Z",
                "speaker": "REI Discussion Group",
                "title": "",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-03-18Z",
                "speaker": "Brandi Shotwell",
                "title": "What to Expect with Interest Rates",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-03-25Z",
                "speaker": "Lindsay Lovell",
                "title": "How to Buy a Short Term Rental",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-04-01Z",
                "speaker": "Anna Kelley",
                "title": "The REI Mom",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-04-08Z",
                "speaker": "Melanie McDaniel",
                "title": "FreeStyle Capital Group",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-04-15Z",
                "speaker": "Mark Podolsky",
                "title": "The Land Geek",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-04-22Z",
                "speaker": "Matthew Sutika",
                "title": "Insurance on Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-05-06Z",
                "speaker": "Charlotte Dunford",
                "title": "Mobile Home Park Investing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-05-13Z",
                "speaker": "REI Discussion Group",
                "title": "Open Club Discusions",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-05-20Z",
                "speaker": "Jacob Vanderslice",
                "title": "Self Storage Real Estate Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-05-27Z",
                "speaker": "Mark Haruguchi",
                "title": "Finding a Why and Accelerating Your Real Estate Deals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-06-03Z",
                "speaker": "Lauren Brychell",
                "title": "Self Storage Funds",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-06-10Z",
                "speaker": "Eddie Speed",
                "title": "Note School",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-06-17Z",
                "speaker": "Jay Hinrichs",
                "title": "Supply Chain and New Development",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-06-24Z",
                "speaker": "Rick Albert",
                "title": "Agent and House Hacker in Los Angeles",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-07-01Z",
                "speaker": "REI Discussion Group",
                "title": "Open Club Discusions",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-07-08Z",
                "speaker": "Dave Van Horn",
                "title": "Real Estate Note Funds",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-07-15Z",
                "speaker": "Fabiola Fleuranvil",
                "title": "Adjusting Deal Sourcing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-07-22Z",
                "speaker": "Don Spafford",
                "title": "Happy Camper Capital",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-07-29Z",
                "speaker": "Isaac Weinberger",
                "title": "Cost Segregation",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-08-05Z",
                "speaker": "John Humphrey",
                "title": "Real Estate In Texas",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-08-12Z",
                "speaker": "Sief Khafagi",
                "title": "Short Term Rental Investing for Cash Flow Tax Benefits and Equity",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-08-19Z",
                "speaker": "Daniel Holmlund",
                "title": "Underwriting Single Family and Multifamily Property",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-08-26Z",
                "speaker": "AJ Shepard",
                "title": "Using Virtual Assistants in Your Business",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-09-02Z",
                "speaker": "Michael Hazen",
                "title": "How to deduct up to 50 of your W2 taxes Dont miss this meeting",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-09-09Z",
                "speaker": "Alicia Jarrett",
                "title": "Super Charged Offers",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-09-16Z",
                "speaker": "Whitney Elkins-Hutten",
                "title": "Passive Investing",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-09-23Z",
                "speaker": "Naeem Farokhnia",
                "title": "Running a Property Management Company",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-09-30Z",
                "speaker": "Josi Heron",
                "title": "WayPoints Equity",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-10-07Z",
                "speaker": "Chandni Dhanjal",
                "title": "Mentorship in Short Term Rentals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-10-14Z",
                "speaker": "Matthew Pollard",
                "title": "Right Motivation and the Right Strategies",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-10-21Z",
                "speaker": "Keshav Kolur",
                "title": "Build to Rent Properties",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-10-28Z",
                "speaker": "Whitney Elkins-Hutten",
                "title": "Investing in Car Washes",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-11-04Z",
                "speaker": "Daniel Holmlund",
                "title": "Investing Strategies for Rising Interest Rates",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-11-11Z",
                "speaker": "John Bianchi",
                "title": "Data Driven Short Term Rentals",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-11-18Z",
                "speaker": "Richard Fertig",
                "title": "Is Now a Wait and See Time in the Market",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-12-02Z",
                "speaker": "Jeremy Roll",
                "title": "Evaluating Private Equity Real Estate",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2022-12-09Z",
                "speaker": "Kurt Lane",
                "title": "An Investors Guide To Rental Ordinances",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-01-06Z",
                "speaker": "Club Discussion",
                "title": "Welcome to 2023 Real Estate Education Club",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-01-13Z",
                "speaker": "Mark Desbrow",
                "title": "Green Light Development in Portland",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-01-20Z",
                "speaker": "Daniel Holmlund",
                "title": "How Investors are Paid in Commercial Syndications",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-01-27Z",
                "speaker": "Mathew Owens",
                "title": "Due Diligence on Passive Investments",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-02-03Z",
                "speaker": "Rance Gregory",
                "title": "How to Invest in Debt Funds",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-02-10Z",
                "speaker": "Andrea Duane",
                "title": "California Market Update",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-02-17Z",
                "speaker": "Antoinette Munroe",
                "title": "Fearless and Free Fi",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-02-24Z",
                "speaker": "Mary Soldano",
                "title": "How to Purchase Real Estate with an SBA Loan",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-03-03Z",
                "speaker": "Dave Zook",
                "title": "Investing in ATM Machines",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-03-10Z",
                "speaker": "Jef Baker",
                "title": "How to Invest in Debt Funds",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-03-17Z",
                "speaker": "Ashish Gupta",
                "title": "Is it possible to replace your W2 income passively",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-03-24Z",
                "speaker": "Dan Lewkowicz",
                "title": "Nothing But Net NNN",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-03-31Z",
                "speaker": "Matthew Mitchell Chancey",
                "title": "Discounted Roth Conversions - NUA",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-04-07Z",
                "speaker": "Merrill Chandler",
                "title": "How To Recession-Proof Your Business and Your Credit",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-04-14Z",
                "speaker": "Levi Brackman",
                "title": "Building a Diverse Investment Portfolio with Real Estate and Other Income-Generating Assets",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-04-28Z",
                "speaker": "Jimmy Edwards",
                "title": "Scaling from 5 to 25",
                "description": ""
            })
        );
        await DataStore.save(
            new Meeting({
                "meetingDate": "2023-05-19Z",
                "speaker": "Sharon E Vornholt",
                "title": "Probate Investing Simplified",
                "description": ""
            })
        );

        // setData(data);
        setIsLoading(false);
    };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
            <button className="text-4xl" onClick={fetchData}>Fetch Data</button>
            {/* {isLoading ? <p>Loading...</p> : <p>{data}</p>} */}
        </div>
    );
};

export default AddMeetingPage;
