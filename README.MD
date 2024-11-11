# ni_library

## Project Name & Description
**ni_library** is a library management backend API that allows users to manage books and members, handle book borrowing, and track overdue books. It includes features for adding, updating, and deleting books and members. The system also includes a borrowing feature where members can borrow books, and admins can monitor overdue books.

## Live URL
> [Live Deployment URL](https://nilibrary.vercel.app/)  

## Technology Stack & Packages
- **Backend Framework**: Node.js with Express
- **Database**: PostgreSQL  
- **ORM**: Prisma 
- **Other Packages**:
  - `dotenv`: For managing environment variables  
  - `cors`: For handling Cross-Origin Resource Sharing
  - `prisma`: ORM for database interaction 
  
## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ni_library.git
   cd ni_library
   npm run dev

## Key Features & Functionality
1. Books Management:
    Add Book: Add a new book to the library catalog.
    Update Book: Update details of an existing book.
    Delete Book: Remove a book from the catalog.
    View Book: Retrieve information about available books.
2. Member Management:
    Add Member: Register a new library member.
    Update Member: Update member details.
    Delete Member: Remove a member from the system.
3. Borrowing System:
    Borrow Book: Members can borrow books from the library.
    Return Book: Members return borrowed books, and the system updates the return status.
    Overdue Tracking: Admins can view a list of overdue books that members have not returned within the allowed period.
