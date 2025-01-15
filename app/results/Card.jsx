import img from "./img1.jpg"
import Image from "next/image"
export default (params) => {
    return (
        <div className="card">
            <Image
                src={img}
                alt="Hiking Activity"
                className="card-image"
            />

            <div className="card-content">
                <span className="activity-type">Outdoor Adventure</span>

                <h3 className="activity-title">Mountain Hiking</h3>

                <div className="info-item">
                    <svg className="info-icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span>Starts at 9:00 AM</span>
                </div>

                <div className="info-item">
                    <svg className="info-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>Mount Rainier National Park</span>
                </div>
            </div>
        </div>
    )
}
