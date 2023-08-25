@component('mail::message')
<table style="width: 100%; border-collapse: collapse; background-color: #f9f9f9;">
    <tr>
        <td style="padding: 20px;">
            <h1 style="font-size: 16px; color: #666666;">You have email from: {{ $name }}</h1>
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                <tr>
                    <td style="width: 120px; font-weight: bold;">Name:</td>
                    <td>{{ $name }}</td>
                </tr>
                <tr>
                    <td style="width: 120px; font-weight: bold;">Email:</td>
                    <td>{{ $email }}</td>
                </tr>
                <tr>
                    <td style="width: 120px; font-weight: bold;">Subject:</td>
                    <td>{{ $subject }}</td>
                </tr>
            </table>
            <p style="font-size: 16px; color: #666666; margin-top: 20px;"><strong>Message:</strong></p>
            <p style="font-size: 14px; color: #333333;">{{ $message }}</p>
        </td>
    </tr>
</table>

<p style="font-size: 14px; color: #666666; margin-top: 30px;">
    Thanks,<br>
    {{ config('app.name') }}
</p>
@endcomponent
