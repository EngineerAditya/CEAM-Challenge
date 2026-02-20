import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import SignOutButton from './sign-out-button';
import PaymentSection from './payment-section';

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

  // Fetch team data
  const { data: team } = await supabase
    .from('teams')
    .select('*')
    .eq('leader_id', user.id)
    .single();

  const trackLabels: Record<string, string> = {
    robotics: 'Robotics',
    cybersecurity: 'Cybersecurity',
    'ai and computer vision': 'AI and Computer Vision',
  };

  const hasPayment = !!profile.order_id;
  const hasTeam = !!team;

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 pt-28 pb-12">
      <div className="w-full max-w-lg flex flex-col gap-6">

        {/* Profile Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          {/* Step 1 indicator */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black text-xs font-bold">
              ✓
            </div>
            <h2 className="text-lg font-bold text-white">Profile Complete</h2>
          </div>

          <div className="flex flex-col gap-3">
            <ProfileField label="Name" value={profile.name} />
            <ProfileField label="Email" value={profile.email} />
            <ProfileField label="College" value={profile.college_name} />
            {profile.reg_num && <ProfileField label="Reg / ID Number" value={profile.reg_num} />}
            <ProfileField label="Mobile" value={`+91 ${profile.mobile_number}`} />
            <ProfileField
              label="Track"
              value={trackLabels[profile.track] || profile.track}
              highlight
            />
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          {hasPayment ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black text-xs font-bold">
                  ✓
                </div>
                <h2 className="text-lg font-bold text-white">Payment Complete</h2>
              </div>
              <ProfileField label="Order ID" value={profile.order_id} />
            </div>
          ) : (
            <PaymentSection userId={user.id} />
          )}
        </div>

        {/* Team Section */}
        {hasPayment && (
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            {hasTeam ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black text-xs font-bold">
                    ✓
                  </div>
                  <h2 className="text-lg font-bold text-white">Team Created</h2>
                </div>
                <ProfileField label="Team Name" value={team.team_name} />
                <ProfileField
                  label="Track"
                  value={trackLabels[team.track] || team.track}
                  highlight
                />
                {[1, 2, 3].map((num) => {
                  const name = team[`teammate${num}_name`];
                  if (!name) return null;
                  return (
                    <div key={num} className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-2">
                        Teammate {num}
                      </p>
                      <p className="text-sm text-white">{name}</p>
                      {team[`teammate${num}_email`] && (
                        <p className="text-xs text-gray-400 mt-1">{team[`teammate${num}_email`]}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[rgb(235,107,38)] flex items-center justify-center text-black text-xs font-bold">
                    3
                  </div>
                  <h2 className="text-lg font-bold text-white">Create Your Team</h2>
                </div>
                <p className="text-sm text-gray-400">
                  Add your teammates to finalize your registration.
                </p>
                <a
                  href="/dashboard/create-team"
                  className="w-full py-3.5 text-center bg-white hover:bg-gray-100 text-black font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-white/10 block"
                >
                  Create Team →
                </a>
              </div>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col gap-3">
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
