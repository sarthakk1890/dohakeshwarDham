import { useEffect, useState } from 'react';
import '../styles/newsUpdates.scss';

const NewsUpdates = () => {
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dhokeshvar-dham.onrender.com/api/v1/news');
                const data = await response.json();

                if (data.success) {
                    setUpdates(data.allNews);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();
    }, []);

    function convertISOStringToDate(isoString) {
        var dateString = isoString;
        var parsedDate = new Date(dateString);

        var options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        var formattedDate = parsedDate.toLocaleDateString('en-GB', options);

        return formattedDate;
    }

    return (
        <div className='latest-news'>
            <div className="main">
                <h2>समाचार और अद्यतन | News and Updates</h2>
                <ul>
                    {updates.map((value) => (
                        <li key={value._id}>
                            <p>{value.news}</p>
                            <span><em>{convertISOStringToDate(value.createdAt)}</em></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NewsUpdates;
