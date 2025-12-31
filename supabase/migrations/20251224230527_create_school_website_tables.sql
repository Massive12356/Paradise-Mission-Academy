/*
  # School Website Database Schema

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key) - Unique identifier
      - `parent_name` (text) - Name of the parent
      - `student_name` (text) - Name of the student
      - `content` (text) - Testimonial content
      - `rating` (integer) - Rating out of 5
      - `image_url` (text, optional) - Photo URL with consent
      - `is_published` (boolean) - Whether to show on website
      - `created_at` (timestamptz) - When testimonial was submitted
      
    - `news_events`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Title of news/event
      - `content` (text) - Full content/description
      - `category` (text) - Category: 'news', 'event', 'announcement'
      - `event_date` (date, optional) - Date of event if applicable
      - `image_url` (text, optional) - Featured image
      - `is_published` (boolean) - Whether to show on website
      - `created_at` (timestamptz) - When created
      
    - `gallery_images`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Image title
      - `image_url` (text) - Image URL
      - `category` (text) - Category: 'classroom', 'sports', 'cultural', 'graduation'
      - `is_published` (boolean) - Whether to show on website
      - `created_at` (timestamptz) - When uploaded
      
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `phone` (text, optional) - Phone number
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `status` (text) - Status: 'new', 'read', 'replied'
      - `created_at` (timestamptz) - When submitted
      
    - `application_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `parent_name` (text) - Parent/guardian name
      - `email` (text) - Contact email
      - `phone` (text) - Phone number
      - `student_name` (text) - Student name
      - `student_age` (integer) - Student age
      - `program` (text) - Desired program level
      - `message` (text, optional) - Additional information
      - `status` (text) - Status: 'new', 'under_review', 'contacted'
      - `created_at` (timestamptz) - When submitted

  2. Security
    - Enable RLS on all tables
    - Public read access for published content (testimonials, news_events, gallery_images)
    - Public write access for form submissions (contact_submissions, application_submissions)
    - Only authenticated admin users can modify content tables
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  student_name text DEFAULT '',
  content text NOT NULL,
  rating integer DEFAULT 5,
  image_url text DEFAULT '',
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published testimonials"
  ON testimonials FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create news_events table
CREATE TABLE IF NOT EXISTS news_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text DEFAULT 'news',
  event_date date,
  image_url text DEFAULT '',
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news and events"
  ON news_events FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage news and events"
  ON news_events FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  category text DEFAULT 'classroom',
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published gallery images"
  ON gallery_images FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage gallery images"
  ON gallery_images FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create application_submissions table
CREATE TABLE IF NOT EXISTS application_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  student_name text NOT NULL,
  student_age integer NOT NULL,
  program text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE application_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit application form"
  ON application_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view applications"
  ON application_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update applications"
  ON application_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);