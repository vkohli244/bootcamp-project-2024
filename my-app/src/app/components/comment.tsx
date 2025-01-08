interface IComment {
    user: string; // The username of the person who made the comment
    comment: string; // The comment text
    time: Date; // The time of the comment (can be ISO string or Date object)
  }  
type CommentProps = {
    comment: IComment;
  };
  
  /* Function to parse and format comment time */
  function parseCommentTime(time: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: "short", // Short month name (e.g., "Sep")
      day: "numeric", // Day of the month
      year: "numeric", // Full year
      hour: "numeric", // Hour in 12-hour format
      minute: "numeric", // Minutes
      hour12: true, // Use 12-hour clock
    };
  
    return time.toLocaleString("en-US", options);
  }
  
  /* Comment Component */
  function Comment({ comment }: CommentProps) {
    return (
      <div>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
        <span>{parseCommentTime(new Date(comment.time))}</span>
      </div>
    );
  }
  
  export default Comment;
  