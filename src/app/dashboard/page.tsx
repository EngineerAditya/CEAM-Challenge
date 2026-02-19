import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import SignOutButton from './sign-out-button';

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  // If no profile, redirect to complete it
  if (!profile) {
    redirect('/complete-profile');
  }

  const trackLabels: Record<string, string> = {
    robotics: 'Robotics',
    cybersecurity: 'Cybersecurity',
    'ai and computer vision': 'AI and Computer Vision',
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        {/* Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <h1
            className="text-2xl font-bold text-white text-center mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Profile
          </h1>
          <p
            className="text-sm text-gray-400 text-center mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Registration confirmed for MAHE Mobility Challenge 2026
          </p>

          <div className="flex flex-col gap-4">
            <ProfileField label="Name" value={profile.name} />
            <ProfileField label="Email" value={profile.email} />
            <ProfileField label="College" value={profile.college_name} />
            {profile.reg_num && <ProfileField label="Registration Number" value={profile.reg_num} />}
            <ProfileField label="Mobile" value={`+91 ${profile.mobile_number}`} />
            <ProfileField
              label="Track"
              value={trackLabels[profile.track] || profile.track}
              highlight
            />
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="/"
              className="w-full py-3 text-center bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-sm font-medium rounded-xl transition-colors"
            >
              ← Back to Home
            </a>
            <SignOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileField({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-3 px-4 bg-white/[0.02] border border-white/5 rounded-xl">
      <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
        {label}
      </span>
      <span
        className={`text-sm font-medium ${highlight ? 'text-[rgb(235,107,38)]' : 'text-white'}`}
      >
        {value}
      </span>
    </div>
  );
}
