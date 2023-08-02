import React from 'react';
import TopBar from './Components/TopBar';
import './App.css';
import DonationForm from './Components/DonationForm';
import Progress from './Components/Progress';
import RecentDonations from './Components/RecentDonations';
import Donation from './Components/Donation';

const targetAmount = 1000;
const donations = [
	{
		amount: 250,
		caption: 'You really need this. Really.',
		id: 1,
		name: 'Jo',
	},
	{
		amount: 30,
		caption: 'Here, take a break from work!',
		id: 2,
		name: 'Rami',
	},
	{
		amount: 20,
		caption: 'LOL! You are too funny. Happy to do this for you. :)',
		id: 3,
		name: 'Michelle',
	},
	{
		amount: 5,
		caption: 'Have fun!',
		id: 4,
		name: 'Malinda',
	},
	{
		amount: 30,
		caption: 'Come visit me in Miami!',
		id: 5,
		name: 'Sam',
	},
	{
		amount: 256,
		caption: 'Come visit me in Abu Dhabi!',
		id: 6,
		name: 'Aisha',
	},
	{
		amount: 145,
		caption: 'Spend the money wisely! Live long and prosper 🖖!',
		id: 7,
		name: 'Michael',
	},
];

const totalDonations = donations.reduce((total, currAmount) => {
	return total + currAmount.amount;
}, 0);

const numDonations = donations.length;

const recentDonations = donations.map((donation) => {
	return <Donation key={donation.id} donation={donation} />;
});

function App() {
	return (
		<>
			<TopBar />
			<main className='container'>
				<section className='sidebar'>
					<RecentDonations recentDonations={recentDonations} />
				</section>
				<section className=''>
					<Progress
						targetAmount={targetAmount}
						totalDonations={totalDonations}
					/>
					<DonationForm numDonations={numDonations} />
				</section>
			</main>
		</>
	);
}

export default App;
