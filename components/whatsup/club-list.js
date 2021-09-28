import CLUBS from '../../DATA';
import styles from './club-list.module.css';
import Image from 'next/image';

export default function ClubList() {
	const checkForEvent = (event, bool) => {
		if (bool) {
			return (
				<>
					<li>{event.dj}</li>
					<li>{event.genre}</li>
				</>
			);
		} else {
			return (
				<>
					<li>Juke Box Music</li>
					<li>Customer Favorite</li>
				</>
			);
		}
	};

	return (
		<div className={styles.wrapper}>
			{CLUBS.map((club) => {
				return (
					<div className={styles.club}>
						<div className={styles.clubHead}>
							<Image
								src={club.img}
								width={140}
								height={140}
								objectFit="cover"
							/>
						</div>
						<div className={styles.clubBody}>
							<h3>{club.name}</h3>
							<ul>
								<li>{club.hours}</li>
								{checkForEvent(club.event, club.isEvent)}
							</ul>
							<input type="checkbox" />
						</div>
					</div>
				);
			})}
		</div>
	);
}
