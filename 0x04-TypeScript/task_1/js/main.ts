interface Teacher {
 firstName: string;
 lastName: string;
 fullTimeEmployee: boolean;
 yearsOfExperience?: number;
 location: string;
 [key: boolean]: any;
}

// extending the Teacher interface

interface Directors extends Teacher {
 numberOfReports: number;
}
