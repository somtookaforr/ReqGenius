import React from 'react'
import Layout from '../../components/layout'
import TextField from '../../components/textField'
import profilePhoto from '../../assets/Group 66.svg'
import copyBtn from '../../assets/Copy.svg'
import likeBtn from '../../assets/Facebook Like.svg'
import dislikeBtn from '../../assets/Facebook Like (1).svg'

const Dashboard = () => {
    const screen = localStorage.getItem('screen')

    const conversation = {
        question: `I want to develop a library management system that can do the following:\n\n 1. As a librarian, I want to efficiently catalog various materials using standardized classification systems, ensuring organized storage and retrieval within the Library Management System.\n2. As a patron, I want a smooth check-in, check-out, and renewal process through the Library Management System, enhancing my overall satisfaction and experience with the library.\n3. As a library administrator, I want robust user management capabilities, allowing for member registration and the tracking of borrowing history to contribute to a personalized experience for patrons.\n4. As a patron, I want to explore and access the extensive collection through the Online Public Access Catalog (OPAC), providing an accessible platform for efficient library resource discovery.\n5. As a library administrator, I want reporting functionalities within the Library Management System to gain valuable insights into library usage statistics, facilitating informed decision-making for improved services.\n6. As a librarian, I want the system to support interlibrary loan programs, allowing for seamless resource sharing and collaboration with other libraries.\n7. As a librarian, I want access control features within the system to regulate user permissions, ensuring the security and integrity of sensitive library information.\n8. As a library administrator, I want specialized features for managing and showcasing special collections, providing a dedicated space to highlight rare and unique items in the library.\n9. As a library administrator, I want the system to support the digitization of archival materials, creating a digital repository for historical documents and ensuring their preservation for future generations.\n10. As a patron with disabilities, I want the Library Management System to incorporate accessibility features, such as screen reader compatibility and alternative formats, to ensure equitable access to library resources.\n11. As a library visitor, I want the system to provide interactive floor maps, helping me locate specific sections, resources, and amenities within the library premises for a more convenient and user-friendly experience.\n12. As a library event coordinator, I want the system to include features for organizing and promoting author events and book signings, attracting more patrons and fostering a vibrant literary community.\n13. As a patron, I want the system to provide personalized reading recommendations based on my borrowing history and preferences, enhancing my discovery of new and interesting materials.`,
        response: `Functional Requirements Cataloging\nSupport the use of standardized classification systems for organizing and retrieving library materials\nProvide efficient and user-friendly tools for cataloging various materials, including books, periodicals, media, and electronic resources\nEnable the creation and management of bibliographic records with detailed metadata\nCirculation Management\nFacilitate seamless check-in, check-out, and renewal processes for library patrons\nProvide real-time information on item availability and due dates *\nSupport automated overdue notices and fines management\nMember Management\nEnable member registration and maintenance\nTrack borrowing history and user preferences\nAllow for personalized services and interactions\nOnline Public Access Catalog (OPAC)\nProvide a user-friendly interface for patron self-service\nAllow patrons to search, explore, and discover library resources *\nOffer advanced search capabilities and filters to refine search results\nReporting and Analytics\nGenerate insightful reports on library usage statistics\nAnalyze data to identify trends, improve services, and make informed decisions\nInterlibrary Loan\nSupport interlibrary loan programs\nAutomate the process of requesting, tracking, and receiving borrowed materials\nFacilitate collaboration with other libraries\nAccess Control\nImplement user-based access controls to restrict access to sensitive information\nDefine roles and permissions for different user groups\nEnsure the security and integrity of library data\nSpecial Collections Management\nProvide specialized features for managing and showcasing special collections\nEnable the cataloging, digitization, and preservation of rare and unique items\nOffer dedicated spaces for displaying special collections to the public\nDigitization and Digital Archives\nSupport the digitization of archival materials\nCreate a digital repository for historical documents\nEnsure the preservation and accessibility of digital archives\nAccessibility\nComply with accessibility standards to provide equitable access to library resources\nOffer screen reader compatibility and alternative formats for users with disabilities\nInteractive Floor Maps\nProvide interactive floor maps to assist users in locating library resources and amenities\nAllow for easy navigation and exploration of the library premises\nAuthor Events and Book Signings\nEnable the planning, organization, and promotion of author events and book signings\nManage event registrations and provide attendees with relevant information\nFoster a vibrant literary community\nPersonalized Reading Recommendations\nAnalyze user borrowing history and preferences\nProvide personalized reading recommendations to enhance patron satisfaction and discovery of new materials`,
    }

    return (
        <Layout>
            <h1 className="logo mb-20 text-center">ReqGenius.</h1>
            {screen === true ? (
                <div className="grid gap-y-12">
                    <div className="lg:w-1/2 border border-gray-400 rounded-2xl p-6 justify-self-start">
                        <p className="text-[#5D9ADA] text-2xl font-semibold">
                            PRECISION AND CLARITY:{' '}
                        </p>
                        <p>
                            No more ambiguity! ReqGenius ensures that your
                            requirements are crystal clear, leaving no room for
                            misinterpretation or confusion during the
                            development process.
                        </p>
                    </div>

                    <div className="lg:w-1/2 border border-gray-400 rounded-2xl p-6 justify-self-end">
                        <p className="text-[#5D9ADA] text-2xl font-semibold">
                            EFFORTLESS IDEATION:{' '}
                        </p>
                        <p>
                            Express your software ideas naturally, just as you
                            imagine them, and watch ReqGenius seamlessly convert
                            your language into comprehensive functional
                            requirements.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid gap-y-4">
                    <div className="grid grid-cols-12 gap-x-4">
                        <div></div>
                        <textarea
                            value={conversation.question}
                            rows={conversation.question.split('\n').length}
                            className="border rounded-xl h-16 w-full p-4 col-span-10"
                            readOnly // Make the textarea read-only to prevent editing
                        />
                        <div className="h-12 w-12 rounded-full bg-gray-300 col-span-1 self-center"></div>
                    </div>

                    <div className="grid grid-cols-12 gap-x-4">
                        <img src={profilePhoto} alt="" className="col-span-1" />
                        <div className="bg-[#CEE1F44D] rounded-2xl p-6 col-span-10">
                            <p className="">
                                {conversation.response
                                    .split('\n')
                                    .map((part, index) => (
                                        <span
                                            key={index}
                                            style={{ display: 'block' }}
                                        >
                                            {part}
                                        </span>
                                    ))}
                            </p>
                        </div>
                        <div className="col-span-1 h-min shadow-md rounded-3xl grid gap-4 p-2 w-max items-center">
                            <button>
                                <img src={copyBtn} alt="" />
                            </button>
                            <button>
                                <img src={likeBtn} alt="" />
                            </button>
                            <button>
                                <img src={dislikeBtn} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <TextField />
        </Layout>
    )
}

export default Dashboard
