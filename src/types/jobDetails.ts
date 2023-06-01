export type Job_highlight= {
	Qualifications: string[];
	Responsibilities: string[];
}

export type Job_required_education= {
	associates_degree: boolean;
	bachelors_degree: boolean;
	degree_mentioned: boolean;
	degree_preferred: boolean;
	high_school: boolean;
	postgraduate_degree: boolean;
	professional_certification: boolean;
	professional_certification_mentioned: boolean;
}

export type Job_required_experience= {
	experience_mentioned: boolean;
	experience_preferred: boolean;
	no_experience_required: boolean;
	required_experience_in_months: number;
}

export type JobDetails= {
	employer_company_type: string;
	employer_logo: string;
	employer_name: string;
	employer_website: string;
	job_apply_is_direct: boolean;
	job_apply_link: string;
	job_apply_quality_score: number;
	job_benefits?: any;
	job_city: string;
	job_country: string;
	job_description: string;
	job_employment_type: string;
	job_experience_in_place_of_education: boolean;
	job_google_link: string;
	job_highlights: Job_highlight;
	job_id: string;
	job_is_remote: boolean;
	job_job_title?: any;
	job_latitude: number;
	job_longitude: number;
	job_max_salary?: any;
	job_min_salary?: any;
	job_offer_expiration_datetime_utc: string;
	job_offer_expiration_timestamp: number;
	job_onet_job_zone: string;
	job_onet_soc: string;
	job_posted_at_datetime_utc: string;
	job_posted_at_timestamp: number;
	job_posting_language: string;
	job_publisher: string;
	job_required_education: Job_required_education;
	job_required_experience: Job_required_experience;
	job_required_skills?: any;
	job_salary_currency?: any;
	job_salary_period?: any;
	job_state: string;
	job_title: string;
}

export type IData= JobDetails[]