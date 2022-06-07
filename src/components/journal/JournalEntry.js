

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://files.worldwildlife.org/wwfcmsprod/images/HERO_Bengal_Tiger_Creek_Bank_India/hero_small/1ah4py338k_Medium_WW226367.jpg)'
                }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Proident exercitation reprehenderit pariatur amet tempor proident anim sunt in irure nisi.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
