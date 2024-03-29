export function formatDateString(dateString:string):string {
    const createdAt = new Date(dateString);

    // Format into a readable string with minimal space consumption
    const formattedDate = createdAt.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }).replace(/(\d+)[\/\.\s](\d+)[\/\.\s](\d+),\s/, '$1-$2-$3 ');

    return formattedDate;
}